import { Outlet } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor, ScrollProgress } from "@/components/ui/CustomCursor";

export function RootLayout() {
  useLenis();
  const location = useLocation();

  return (
    <HelmetProvider>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
