import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Counter } from "@/components/ui/Counter";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const team = [
  { name: "Michael Funga", role: "General Manager", image: IMAGES.team[0] },
  { name: "Sarah Jenkins", role: "Head Chef", image: IMAGES.team[1] },
  { name: "David Miller", role: "Event Manager", image: IMAGES.team[2] },
  { name: "Emma Smith", role: "Spa Director", image: IMAGES.team[3] }
];

const stats = [
  { label: "Projects Completed", value: 450 },
  { label: "Awards Won", value: 35 },
  { label: "Luxury Rooms", value: 120 },
  { label: "Happy Guests", value: 15400 }
];

export function TeamStats() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle title="Expert Team Persons" eyebrow="Our Professionals" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-32"
        >
          {team.map((person, i) => (
            <motion.div key={i} variants={fadeInUp} className="group relative aspect-[3/4] overflow-hidden bg-background-alt">
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center">
                <h4 className="font-serif text-xl text-foreground mb-1">{person.name}</h4>
                <p className="text-xs uppercase tracking-widest text-accent">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-background-alt pt-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-5xl md:text-6xl font-serif text-foreground mb-4">
                <Counter to={stat.value} duration={2.5} />
                <span className="text-accent">+</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
