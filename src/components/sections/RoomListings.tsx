import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { Users, Bed, Expand } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const rooms = [
  {
    id: "junior-suite",
    name: "Junior Suite",
    price: 250,
    image: IMAGES.rooms.junior,
    guests: 2,
    bed: "King",
    size: "45"
  },
  {
    id: "family-suite",
    name: "Family Suite",
    price: 350,
    image: IMAGES.rooms.family,
    guests: 4,
    bed: "2 Queen",
    size: "65"
  },
  {
    id: "business-suite",
    name: "Business Suite",
    price: 400,
    image: IMAGES.rooms.business,
    guests: 2,
    bed: "King",
    size: "55"
  }
];

export function RoomListings() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle title="Book your stay and relax in luxury" eyebrow="Customer Services" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {rooms.map((room) => (
            <motion.div key={room.id} variants={fadeInUp} className="group flex flex-col bg-background-alt border border-transparent hover:border-background-alt transition-colors">
              <Link to={`/rooms/${room.id}`} className="block relative aspect-[4/3] overflow-hidden">
                <ImageFrame src={room.image} alt={room.name} />
                <div className="absolute top-4 right-4 bg-background-dark/90 px-4 py-2 text-xs font-serif tracking-widest uppercase text-foreground z-20 backdrop-blur-sm">
                  ${room.price} <span className="text-foreground-muted font-sans lowercase">/ night</span>
                </div>
              </Link>
              <div className="p-8 flex flex-col items-center text-center">
                <Link to={`/rooms/${room.id}`}>
                  <h3 className="font-serif text-2xl text-foreground mb-6 hover:text-accent transition-colors">{room.name}</h3>
                </Link>
                <div className="flex items-center gap-6 text-foreground-muted text-xs uppercase tracking-widest border-t border-background-dark pt-6 w-full justify-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-accent" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Expand className="w-4 h-4 text-accent" />
                    <span>{room.size}m²</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link to="/rooms">
            <Button variant="outline">View All Rooms</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
