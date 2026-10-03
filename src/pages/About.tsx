import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="About Us" 
        breadcrumb="Home / About Us" 
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <Experience />
      <Testimonials />
    </PageTransition>
  );
}
