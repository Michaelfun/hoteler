import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { TeamStats } from "@/components/sections/TeamStats";

export default function Team() {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Team - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Expert Team" 
        breadcrumb="Home / Team" 
        image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <TeamStats />
    </PageTransition>
  );
}
