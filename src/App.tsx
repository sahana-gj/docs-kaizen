import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- Change here
import { ThemeProvider } from "next-themes";
import { BlogLayout } from "./components/BlogLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter> {/* <-- Change here */}
          <Routes>
            <Route path="/" element={<BlogLayout />} />
            <Route path="/:postId" element={<BlogLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter> {/* <-- Change here */}
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;