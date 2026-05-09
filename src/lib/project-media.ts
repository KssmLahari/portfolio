import type { Project, ProjectScreenshot } from '@/data/projects';

const PLACEHOLDER_HOST = 'via.placeholder.com';

export function isPlaceholderScreenshotUrl(url: string): boolean {
  return url.includes(PLACEHOLDER_HOST);
}

/** Prefer website/product shots for card hero; skip generic placeholder URLs when possible. */
export function getCardCoverScreenshot(project: Project): ProjectScreenshot | null {
  if (!project.screenshots?.length) return null;
  const real = project.screenshots.filter((s) => !isPlaceholderScreenshotUrl(s.url));
  const pool = real.length > 0 ? real : project.screenshots;
  const order: ProjectScreenshot['type'][] = [
    'website',
    'product',
    'dashboard',
    'architecture',
    'performance',
    'code',
  ];
  for (const type of order) {
    const hit = pool.find((s) => s.type === type);
    if (hit) return hit;
  }
  return pool[0] ?? null;
}

/** Up to 4 distinct screenshots for the card filmstrip (excluding duplicate URLs). */
export function getCardFilmstripScreenshots(project: Project, max = 4): ProjectScreenshot[] {
  if (!project.screenshots?.length) return [];
  const seen = new Set<string>();
  const out: ProjectScreenshot[] = [];
  for (const s of project.screenshots) {
    const key = s.url.split('?')[0];
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(s);
    if (out.length >= max) break;
  }
  return out;
}
