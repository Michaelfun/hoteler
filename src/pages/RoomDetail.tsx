import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { IMAGES } from "@/data/images";
import { Users, Bed, Expand, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function RoomDetail() {
  const { slug } = useParams();
  
  // Dummy data based on slug
  const room = {
    name: slug === "junior-suite" ? "Junior Suite" : slug === "family-suite" ? "Family Suite" : "Business Suite",
    price: slug === "junior-suite" ? 250 : slug === "family-suite" ? 350 : 400,
    image: slug === "junior-suite" ? IMAGES.rooms.junior : slug === "family-suite" ? IMAGES.rooms.family : IMAGES.rooms.business,
    guests: slug === "family-suite" ? 4 : 2,
    bed: slug === "family-suite" ? "2 Queen" : "King",
    size: slug === "family-suite" ? "65" : slug === "junior-suite" ? "45" : "55",
    desc: "Experience the ultimate in comfort and luxury in our suites. Features a spacious layout with a separate seating area, a plush king-size bed, and a marble bathroom with a deep soaking tub and separate glass-enclosed shower."
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{room.name} - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title={room.name} 
        breadcrumb={`Home / Rooms / ${room.name}`} 
        image={room.image} 
      />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">Room Overview</h2>
                <p className="text-foreground-muted leading-relaxed">{room.desc}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-background-alt">
                <div className="flex flex-col items-center text-center gap-2">
                  <Users className="w-8 h-8 text-accent font-light stroke-[1]" />
                  <span className="text-xs uppercase tracking-widest text-foreground-muted">Guests: {room.guests}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Bed className="w-8 h-8 text-accent font-light stroke-[1]" />
                  <span className="text-xs uppercase tracking-widest text-foreground-muted">Bed: {room.bed}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Expand className="w-8 h-8 text-accent font-light stroke-[1]" />
                  <span className="text-xs uppercase tracking-widest text-foreground-muted">Size: {room.size}m²</span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">Room Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Free High-Speed Wi-Fi', 'Smart TV with Streaming Services', 'Nespresso Coffee Machine', 'In-Room Safe', 'Mini Bar', 'Premium Bath Amenities', 'Bathrobes and Slippers', '24-hour Room Service'].map((amenity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-accent" />
                      </span>
                      <span className="text-sm text-foreground-muted">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-background-alt p-8 sticky top-32 border border-background-alt/50 shadow-xl">
                <h3 className="font-serif text-2xl text-foreground mb-2">Book This Room</h3>
                <div className="text-3xl font-serif text-accent mb-8">
                  ${room.price} <span className="text-sm font-sans text-foreground-muted tracking-normal">/ night</span>
                </div>
                
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-foreground-muted">Check In</label>
                    <input type="date" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-foreground-muted">Check Out</label>
                    <input type="date" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-foreground-muted">Guests</label>
                    <select className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground">
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                  <Link to="/booking" className="mt-4">
                    <Button className="w-full">Reserve Now</Button>
                  </Link>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
