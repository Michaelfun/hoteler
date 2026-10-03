import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { LatestNews } from "@/components/sections/LatestNews";

export default function News() {
  return (
    <PageTransition>
      <Helmet>
        <title>News & Blog - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="News Update" 
        breadcrumb="Home / News" 
        image="https://images.unsplash.com/photo-1551882547-ff40c0d13c11?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <div className="pt-24 bg-background">
        <LatestNews />
      </div>
    </PageTransition>
  );
}
