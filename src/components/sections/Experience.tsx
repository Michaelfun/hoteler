import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Link } from "react-router-dom";

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Images column ── */}
          <div className="relative w-full">

            {/* Mobile: simple stacked grid so both images always show */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={IMAGES.experience.layer1}
                  alt="Experience Comfort"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-accent/40 pointer-events-none" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden mt-8"
              >
                <img
                  src={IMAGES.experience.layer2}
                  alt="Experience Luxury"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-accent/40 pointer-events-none" />
              </motion.div>
            </div>

            {/* Desktop: classic layered/offset layout */}
            <div className="hidden lg:block relative h-[580px]">
              {/* Gold decorative frame behind the large image */}
              <div className="absolute top-6 left-6 w-[72%] h-[75%] border border-accent/50 z-0" />

              {/* Large image — top-left */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-[72%] h-[75%] z-10 overflow-hidden shadow-2xl"
              >
                <img
                  src={IMAGES.experience.layer1}
                  alt="Experience Comfort"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Accent label on the large image */}
              <div className="absolute top-4 left-4 z-20 bg-accent/90 px-4 py-2 text-[10px] uppercase tracking-widest text-background-dark font-medium">
                Since 2010
              </div>

              {/* Small image — bottom-right, clearly separated */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-0 w-[52%] h-[45%] z-20 overflow-hidden shadow-2xl border-4 border-background"
              >
                <img
                  src={IMAGES.experience.layer2}
                  alt="Experience Luxury"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Small badge on second image */}
                <div className="absolute bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-sm px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-accent">World-Class Service</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Text column ── */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <SectionTitle
              title="Experience unparalleled comfort"
              eyebrow="Discover Hoteler"
              align="left"
            />

            <p className="text-sm md:text-base text-foreground-muted mb-8 max-w-lg leading-relaxed">
              Our luxury hotel offers a sanctuary of peace and elegance. From our beautifully appointed rooms to our world-class dining and spa facilities, every aspect of your stay is designed to exceed your expectations.
            </p>
            <p className="text-sm md:text-base text-foreground-muted mb-10 max-w-lg leading-relaxed">
              We are dedicated to providing personalized service that anticipates your needs, ensuring a truly memorable experience in the heart of Tanzania.
            </p>

            <Link to="/about">
              <Button>More About Us</Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
