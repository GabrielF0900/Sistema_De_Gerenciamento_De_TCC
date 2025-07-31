import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2, // Retry failed requests up to 3 times
      staleTime: Infinity, // Data is considered fresh indefinitely
    },
  },
});

export default queryClient;
