import { PageTransition } from "@/components/layout/PageTransition";
import { Helmet } from "react-helmet-async";
import { IMAGES } from "@/data/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { Select } from "@/components/ui/Select";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sections
import { SpecialOffers } from "@/components/sections/SpecialOffers";
import { OutdoorActivities } from "@/components/sections/OutdoorActivities";
import { RoomListings } from "@/components/sections/RoomListings";
import { Testimonials } from "@/components/sections/Testimonials";
import { Experience } from "@/components/sections/Experience";
import { FoodMenu } from "@/components/sections/FoodMenu";
import { VideoSection } from "@/components/sections/VideoSection";
import { TeamStats } from "@/components/sections/TeamStats";
import { ContactSection } from "@/components/sections/ContactSection";
import { LatestNews } from "@/components/sections/LatestNews";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Helmet>
        <title>Home - Hoteler | Luxury Hotel</title>
        <meta name="description" content="Book Your Dream Hotel with Hoteler" />
      </Helmet>
      
      {/* 3. Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center z-0">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Luxury Hotel Resort" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>
        
        {/* Deep, stylish gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/95 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/50 via-transparent to-background-dark/50 pointer-events-none z-10" />

        {/* Elegant double frame - pushed down to avoid crossing the navbar */}
        <div className="absolute top-28 bottom-4 left-4 right-4 md:top-32 md:bottom-8 md:left-8 md:right-8 border border-accent/20 pointer-events-none z-10" />
        <div className="absolute top-32 bottom-6 left-6 right-6 md:top-36 md:bottom-12 md:left-12 md:right-12 border border-accent/40 pointer-events-none z-10 hidden md:block" />

        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 50 }}
            className="flex gap-3 mb-8"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-accent drop-shadow-[0_0_8px_rgba(184,137,91,0.5)]" />
            ))}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-[1.1] mb-8 drop-shadow-2xl tracking-wide"
          >
            <span className="block font-light italic text-accent/90 mb-4 text-3xl md:text-5xl">Welcome to Paradise</span>
            Book Your Dream Hotel <br className="hidden md:block" />with Hoteler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="text-white/90 max-w-2xl text-sm md:text-base mb-12 font-light tracking-wide drop-shadow-md"
          >
            Experience the untamed beauty of Tanzania intertwined with world-class luxury. Your unforgettable African escape begins right here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Button onClick={() => navigate("/rooms")} className="shadow-[0_0_30px_rgba(184,137,91,0.3)]">Discover Rooms</Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* 4. Booking Bar */}
      <section className="relative z-30 -mt-20 px-6 container mx-auto">
        <div className="bg-background-dark p-8 border border-background-alt flex flex-col lg:flex-row items-center gap-6 shadow-2xl">
          <DatePicker label="Check In" defaultValue={new Date().toISOString().split('T')[0]} className="flex-1" />
          <DatePicker label="Check Out" defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]} className="flex-1" />
          <Select 
            label="Room" 
            options={[
              { label: "Standard Room Size", value: "standard" },
              { label: "Junior Suite", value: "junior" },
              { label: "Family Suite", value: "family" }
            ]}
            className="flex-1" 
          />
          <Button variant="primary" className="w-full lg:w-auto h-[60px]" onClick={() => navigate("/booking")}>
            Check Now
          </Button>
        </div>
      </section>

      {/* 5. Special Offers */}
      <SpecialOffers />

      {/* 6. Outdoor Activities */}
      <OutdoorActivities />

      {/* 7. Room Listings */}
      <RoomListings />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Experience */}
      <Experience />

      {/* 10. Food Menu */}
      <FoodMenu />

      {/* 11. Video Section */}
      <VideoSection />

      {/* 12. Team & Stats */}
      <TeamStats />

      {/* 13. Contact */}
      <ContactSection />

      {/* 14. Latest News */}
      <LatestNews />

    </PageTransition>
  );
}
