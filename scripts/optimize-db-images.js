#!/usr/bin/env node
/**
 * Script to add Cloudinary URL optimization to all database files
 * 
 * Usage: node scripts/optimize-db-images.js
 * 
 * This script:
 * 1. Reads all .ts files in src/app/database/
 * 2. Adds the optimizeCloudinaryUrl import
 * 3. Wraps Cloudinary URLs with optimizeCloudinaryUrl()
 * 4. Writes the updated files back
 */

const fs = require('fs');
const path = require('path');

const DATABASE_DIR = path.join(__dirname, '..', 'src', 'app', 'database');
const FILES_TO_SKIP = ['AllMenu.ts', 'optimizeCloudinaryUrl.ts'];

function optimizeCloudinaryUrlsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has the import
  if (content.includes('optimizeCloudinaryUrl')) {
    console.log(`✓ Already optimized: ${path.basename(filePath)}`);
    return false;
  }
  
  // Add import statement after the first import
  const importStatement = `import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";\n`;
  content = content.replace(/(import .+ from .+;)/, `$1\n${importStatement}`);
  
  // Find and wrap Cloudinary URLs
  const cloudinaryUrlRegex = /"(https:\/\/res\.cloudinary\.com\/[^"]+)"/g;
  let match;
  let replaced = 0;
  
  while ((match = cloudinaryUrlRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const url = match[1];
    
    // Skip if already wrapped
    if (fullMatch.includes('optimizeCloudinaryUrl')) {
      continue;
    }
    
    const replacement = `optimizeCloudinaryUrl("${url}")`;
    content = content.replace(fullMatch, replacement);
    replaced++;
  }
  
  if (replaced > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${path.basename(filePath)} (${replaced} URLs)`);
    return true;
  }
  
  console.log(`- No Cloudinary URLs: ${path.basename(filePath)}`);
  return false;
}

function main() {
  console.log('🚀 Optimizing Cloudinary URLs in database files...\n');
  
  const files = fs.readdirSync(DATABASE_DIR)
    .filter(file => file.endsWith('.ts'))
    .filter(file => !FILES_TO_SKIP.includes(file));
  
  let updatedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(DATABASE_DIR, file);
    if (optimizeCloudinaryUrlsInFile(filePath)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Complete! Updated ${updatedCount}/${files.length} files.`);
}

main();
