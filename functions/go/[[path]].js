/**
 * Campaign links: /go/<src>/<post>
 *
 * Serves the landing page while leaving the pretty path in the address bar —
 * which matters because Cloudflare Web Analytics reports a Path dimension and
 * has no query-string dimension. A query-only link (/?src=ig) collapses every
 * campaign into a single "/" row; a path link gets its own row per creative.
 *
 * The page reads the segments back off location.pathname.
 */
export function onRequest({ request, env }) {
  const url = new URL(request.url);
  url.pathname = '/';
  url.search = '';
  return env.ASSETS.fetch(new Request(url.toString(), request));
}
