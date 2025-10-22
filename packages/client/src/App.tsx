import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Portable News App</h1>

        <form>
          <input placeholder="Type something..." />
        </form>
        <code>{import.meta.env.VITE_API_BASE}</code>
      </QueryClientProvider>
    </>
  );
}

export default App;
