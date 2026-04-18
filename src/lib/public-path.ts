/**
 * URLs for files in `public/` when the app uses `basePath` (e.g. GitHub Pages at
 * /repo-name). Absolute paths like `/gallery/x` would otherwise resolve to the
 * domain root and 404. Keep CI `NEXT_PUBLIC_BASE_PATH` in sync with `next.config` basePath.
 */
export function publicAsset(path: string): string {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!bp) return normalized;
  return `${bp}${normalized}`;
}
