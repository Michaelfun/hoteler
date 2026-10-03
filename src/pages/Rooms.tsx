import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { RoomListings } from "@/components/sections/RoomListings";

export default function Rooms() {
  return (
    <PageTransition>
      <Helmet>
        <title>Rooms & Suites - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Rooms & Suites" 
        breadcrumb="Home / Rooms" 
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <RoomListings />
    </PageTransition>
  );
}
