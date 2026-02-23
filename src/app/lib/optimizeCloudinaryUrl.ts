/**
 * Cloudinary Image URL Optimizer
 * 
 * Adds automatic f_auto,q_auto transformations to Cloudinary URLs
 * to ensure optimal image delivery (WebP/AVIF for supported browsers)
 * 
 * Note: When used with the custom cloudinary-loader.ts, this function
 * ensures URLs are pre-optimized at the data source level.
 */

/**
 * Optimizes a Cloudinary image URL by adding f_auto,q_auto transformations
 * @param url - The Cloudinary image URL or local path
 * @returns Optimized URL with transformations
 */
export function optimizeCloudinaryUrl(url: string): string {
  // Return local files as-is (they'll be served from /public)
  if (!url.startsWith('http')) {
    return url;
  }
  
  // Skip non-Cloudinary URLs
  if (!url.includes('res.cloudinary.com')) {
    return url;
  }

  // Prevent double-wrapping (idempotent)
  if (url.includes('optimizeCloudinaryUrl')) {
    // Extract the actual URL if it was accidentally double-wrapped
    const match = url.match(/optimizeCloudinaryUrl\("([^"]+)"\)/);
    if (match) {
      url = match[1];
    }
  }
  
  // Already optimized
  if (url.includes('f_auto,q_auto')) {
    return url;
  }
  
  // Add transformations after /upload/
  return url.replace('/upload/', '/upload/f_auto,q_auto/');
}

/**
 * Batch optimize multiple image URLs
 * @param urls - Array of Cloudinary image URLs
 * @returns Array of optimized URLs
 */
export function optimizeCloudinaryUrls(urls: string[]): string[] {
  return urls.map(optimizeCloudinaryUrl);
}
