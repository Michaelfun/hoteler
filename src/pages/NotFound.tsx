import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <PageTransition className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <Helmet>
        <title>404 Not Found - Hoteler</title>
      </Helmet>
      
      <h1 className="text-8xl md:text-9xl font-serif text-accent mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Page Not Found</h2>
      <p className="text-foreground-muted mb-10 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </PageTransition>
  );
}
