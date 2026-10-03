import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const menuItems = [
  { name: "Pasta Primavera", price: 24, desc: "Fresh vegetables, garlic, olive oil", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=150&q=80" },
  { name: "Grilled Salmon", price: 32, desc: "Lemon butter sauce, asparagus", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=150&q=80" },
  { name: "Beef Tenderloin", price: 45, desc: "Red wine reduction, mashed potatoes", image: "https://images.unsplash.com/photo-1544025162-8111f4229da3?auto=format&fit=crop&w=150&q=80" },
  { name: "Caesar Salad", price: 16, desc: "Romaine, croutons, parmesan", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=150&q=80" },
  { name: "Tiramisu", price: 12, desc: "Espresso, mascarpone, cocoa", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=150&q=80" },
  { name: "Lobster Bisque", price: 18, desc: "Creamy lobster soup, chives", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&w=150&q=80" },
];

export function FoodMenu() {
  return (
    <section className="py-24 md:py-32 bg-background-alt">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle title="Specialities Foods" eyebrow="Restaurant Menu" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-16"
        >
          {menuItems.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-background">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-grow">
                <div className="flex items-end gap-4 mb-1">
                  <h4 className="font-serif text-xl text-foreground whitespace-nowrap">{item.name}</h4>
                  <div className="flex-grow border-b-2 border-dotted border-background-dark/50 mb-1.5 opacity-30" />
                  <span className="font-serif text-xl text-accent">${item.price}</span>
                </div>
                <p className="text-sm text-foreground-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
