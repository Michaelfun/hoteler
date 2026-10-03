import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Link } from "react-router-dom";

export function SpecialOffers() {
  const offers = [
    { title: "Family Discount", image: IMAGES.offers.family, link: "/offers" },
    { title: "Couples Offer", image: IMAGES.offers.couples, link: "/offers" },
    { title: "Buy One Get One Free", image: IMAGES.offers.bogo, link: "/offers" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get Our Special Offer." eyebrow="What We Offer" />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {offers.map((offer, index) => (
            <motion.div key={index} variants={fadeInUp} className="group cursor-pointer">
              <Link to={offer.link} className="block relative aspect-[4/5] overflow-hidden">
                <ImageFrame src={offer.image} alt={offer.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">{offer.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discover More</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
