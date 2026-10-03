import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { SpecialOffers } from "@/components/sections/SpecialOffers";

export default function Offers() {
  return (
    <PageTransition>
      <Helmet>
        <title>Special Offers - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Special Offers" 
        breadcrumb="Home / Offers" 
        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <SpecialOffers />
    </PageTransition>
  );
}
