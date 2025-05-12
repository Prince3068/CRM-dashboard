import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SegmentBuilder from "./components/segments/SegmentBuilder";
import CampaignHistory from "./components/campaigns/CampaignHistory";
import CampaignCreator from "./components/campaigns/CampaignCreator";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/auth/Login";

const queryClient = new QueryClient();

const App = () => (
  <GoogleOAuthProvider clientId="1005623784929-5i5p5tqmucpbn4n14hvtssa6ltdmafi6.apps.googleusercontent.com">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/segments/create" element={<SegmentBuilder />} />
            <Route path="/campaigns" element={<CampaignHistory />} />
            <Route path="/campaigns/create" element={<CampaignCreator />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
