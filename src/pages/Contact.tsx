import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Contact Us" 
        breadcrumb="Home / Contact" 
        image="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <ContactSection />
    </PageTransition>
  );
}
