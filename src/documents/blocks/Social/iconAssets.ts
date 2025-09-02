export const socialIconUrls: Record<string, string> = {
  'facebook-circle': 'https://cdn-icons-png.flaticon.com/512/2175/2175193.png',
  'facebook-rounded': 'https://cdn-icons-png.flaticon.com/512/733/733603.png',
  'instagram-circle': 'https://cdn-icons-png.flaticon.com/512/1384/1384015.png',
  'instagram-rounded': 'https://cdn-icons-png.flaticon.com/512/1419/1419647.png',
  'linkedin-circle': 'https://cdn-icons-png.flaticon.com/512/1384/1384014.png',
  'linkedin-rounded': 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
  'tiktok-circle': 'https://cdn-icons-png.flaticon.com/512/3116/3116491.png',
  'tiktok-rounded': 'https://cdn-icons-png.flaticon.com/512/5968/5968812.png',
  'twitter-circle': 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png',
  'twitter-rounded': 'https://cdn-icons-png.flaticon.com/512/5968/5968830.png',
  'youtube-circle': 'https://cdn-icons-png.flaticon.com/512/10110/10110362.png',
  'youtube-rounded': 'https://cdn-icons-png.flaticon.com/512/1384/1384044.png',
};

export function getSocialIconUrl(platform: string, shape: 'rounded' | 'circle'): string {
  const normalizedPlatform = platform.toLowerCase() === 'x' ? 'twitter' : platform.toLowerCase();
  const cdnShape = shape === 'circle' ? 'circle' : 'rounded';
  const key = `${normalizedPlatform}-${cdnShape}`;
  return socialIconUrls[key] || socialIconUrls['facebook-circle']; // fallback
}
