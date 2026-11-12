// As SSR is disabled, every unknown path would otherwise be answered with the SPA shell (HTML, status 200).
// Requests for files (paths with an extension) and well-known URIs that are not served as public assets
// are never app pages, so answer them with a proper 404 instead.
export default defineEventHandler((event) => {
  const { pathname } = getRequestURL(event);
  if (pathname.startsWith('/.well-known/') || /\.[^/]+$/.test(pathname)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' });
  }
});
