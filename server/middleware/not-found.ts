// As SSR is disabled, every unknown path would otherwise be answered with the SPA shell (HTML, status 200).
// Requests for files (paths with an extension) and well-known URIs that are not served as public assets
// are never app pages, so answer them with a proper 404 instead.
// Skipped while prerendering static builds (e.g. GitHub / GitLab Pages), as the prerenderer itself requests
// files like /404.html and /200.html to generate the SPA fallbacks.
export default defineEventHandler((event) => {
  if (import.meta.prerender) {
    return;
  }
  const { pathname } = getRequestURL(event);
  if (pathname.startsWith('/.well-known/') || /\.[^/]+$/.test(pathname)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' });
  }
});
