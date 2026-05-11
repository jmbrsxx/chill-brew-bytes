import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Determine base path at runtime
const getBasePath = () => {
  // Check if we're on GitHub Pages by looking at the hostname
  if (typeof window !== 'undefined' && window.location.hostname === 'jmbrsxx.github.io') {
    return '/chill-brew-bytes';
  }
  return '';
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: getBasePath(),
  });

  return router;
};
