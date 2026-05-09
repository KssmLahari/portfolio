/** Public handles — change GitHub username here only. */
export const GITHUB_USERNAME = 'KssmLahari';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

/**
 * Hero headshot in `public/`. For a transparent cutout (no brown/olive wall), export a PNG
 * (e.g. remove.bg) and set `.env.local`: `NEXT_PUBLIC_PROFILE_IMAGE=/profile-hero.png`
 */
export const PROFILE_HERO_IMAGE =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_PROFILE_IMAGE?.trim()) || '/profile.jpg';

export function githubRepo(repo: string): string {
  return `${GITHUB_URL}/${repo.replace(/^\//, '')}`;
}
