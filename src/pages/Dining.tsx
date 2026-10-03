import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { FoodMenu } from "@/components/sections/FoodMenu";

export default function Dining() {
  return (
    <PageTransition>
      <Helmet>
        <title>Dining - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Our Restaurant" 
        breadcrumb="Home / Dining" 
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <FoodMenu />
    </PageTransition>
  );
}
