import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Determine base path for different environments
const getBasePath = () => {
  // For production (GitHub Pages), use the repository path
  if (import.meta.env.PROD) {
    return '/chill-brew-bytes';
  }
  // For development, use root
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
