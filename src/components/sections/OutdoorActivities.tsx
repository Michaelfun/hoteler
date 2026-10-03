import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Check, Sun, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function OutdoorActivities() {
  return (
    <section className="py-24 md:py-32 bg-background-alt overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <SectionTitle 
              title="We Provide Outdoor Activities To All Visitors" 
              eyebrow="Hoteler Luxury Hotel"
              align="left"
            />
            
            <p className="text-sm md:text-base text-accent mb-8 max-w-lg">
              San Francisco has hills with views, the coast, excellent food & has been voted the happiest, healthiest and fittest city in the States many times.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-4">
                <Sun className="w-10 h-10 text-accent font-light stroke-[1]" />
                <h4 className="font-serif text-xl text-foreground">The Best<br/>Lighting</h4>
              </div>
              <div className="flex flex-col gap-4">
                <Droplets className="w-10 h-10 text-accent font-light stroke-[1]" />
                <h4 className="font-serif text-xl text-foreground">The Best<br/>Swimming</h4>
              </div>
            </div>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "It is a long fact that a reader will be distracted by the readable",
                "Lorem Ipsum is simply dummy text of the printing and industry",
                "There are many variations of Lorem Ipsum majority"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-accent" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <Button>Discover More</Button>
          </motion.div>

          <div className="relative h-[560px] w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[70%] h-[75%] z-10 overflow-hidden"
            >
              <img
                src={IMAGES.outdoor.main}
                alt="Outdoor Pool"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-accent/40 translate-x-3 translate-y-3 pointer-events-none -z-10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 w-[55%] h-[52%] z-20 overflow-hidden ring-8 ring-background-alt"
            >
              <img
                src={IMAGES.outdoor.sub}
                alt="Spa"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
