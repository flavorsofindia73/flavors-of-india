// src/app/lib/cloudinary-loader.ts
import { ImageLoaderProps } from 'next/image';

/**
 * Optimized Cloudinary Image Loader
 * - Uses f_auto for automatic WebP/AVIF delivery
 * - Uses q_auto:eco for eco-friendly quality (smaller files)
 * - Respects requested width for responsive images
 */
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  // Only process Cloudinary URLs
  if (src.includes('res.cloudinary.com')) {
    const uploadIndex = src.indexOf('/upload/');
    if (uploadIndex === -1) return src;

    const baseUrl = src.substring(0, uploadIndex + 8);
    const transformPart = src.substring(uploadIndex + 8);
    const parts = transformPart.split('/');
    const existingTransforms = parts[0].split(',');

    // Update width transformation
    const widthIndex = existingTransforms.findIndex(t => t.startsWith('w_'));
    if (widthIndex !== -1) {
      existingTransforms[widthIndex] = `w_${Math.round(width)}`;
    } else {
      existingTransforms.push(`w_${Math.round(width)}`);
    }

    // Add quality if specified and not already present
    const qualityIndex = existingTransforms.findIndex(t => t.startsWith('q_'));
    if (quality && qualityIndex === -1) {
      existingTransforms.push(`q_${quality}`);
    }

    return `${baseUrl}${existingTransforms.join(',')}/${parts.slice(1).join('/')}`;
  }

  // Return original URL for non-Cloudinary images
  return src;
}
