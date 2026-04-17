import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LimpezaSofa from "./pages/LimpezaSofa.tsx";
import LimpezaColchao from "./pages/LimpezaColchao.tsx";
import LimpezaPoltronas from "./pages/LimpezaPoltronas.tsx";
import LimpezaEstofados from "./pages/LimpezaEstofados.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/limpeza-de-sofa-salvador" element={<LimpezaSofa />} />
            <Route path="/limpeza-de-colchao-salvador" element={<LimpezaColchao />} />
            <Route path="/limpeza-de-poltronas-salvador" element={<LimpezaPoltronas />} />
            <Route path="/limpeza-de-estofados-salvador" element={<LimpezaEstofados />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
