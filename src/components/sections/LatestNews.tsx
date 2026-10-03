import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const news = [
  {
    id: "luxury-hotel-trends",
    title: "10 Reasons why you should visit our luxury hotel",
    date: "OCTOBER 15, 2026",
    category: "HOTEL",
    image: IMAGES.news[0]
  },
  {
    id: "best-spa-treatments",
    title: "The best spa treatments for relaxation and rejuvenation",
    date: "OCTOBER 12, 2026",
    category: "WELLNESS",
    image: IMAGES.news[1]
  },
  {
    id: "fine-dining-experience",
    title: "Experience fine dining at its best with our new chef",
    date: "OCTOBER 05, 2026",
    category: "DINING",
    image: IMAGES.news[2]
  }
];

export function LatestNews() {
  return (
    <section className="py-24 md:py-32 bg-background-alt">
      <div className="container mx-auto px-6">
        <SectionTitle title="Latest News Update" eyebrow="News & Blog" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {news.map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="group flex flex-col">
              <Link to={`/news/${item.id}`} className="block relative aspect-video overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-accent px-3 py-1 text-[10px] uppercase tracking-widest text-background-dark font-medium">
                  {item.category}
                </div>
              </Link>
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-accent mb-4">
                <span>{item.date}</span>
                <span className="w-8 h-px bg-accent/50" />
              </div>
              <Link to={`/news/${item.id}`}>
                <h3 className="font-serif text-2xl text-foreground hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
