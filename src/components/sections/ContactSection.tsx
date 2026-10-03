import { IMAGES } from "@/data/images";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="relative z-10">
            <SectionTitle title="Get in Touch" eyebrow="Contact Us" align="left" />
            
            <div className="bg-background-alt p-8 md:p-12 shadow-2xl relative border border-background-alt/50">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent border border-transparent transition-colors" />
                  <input type="email" placeholder="Email Address" className="bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent border border-transparent transition-colors" />
                </div>
                <input type="text" placeholder="Subject" className="bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent border border-transparent transition-colors" />
                <textarea placeholder="Write Message" rows={4} className="bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent border border-transparent transition-colors resize-none" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </motion.div>

          <div className="relative h-[600px] lg:h-[800px] hidden lg:block -mr-32 rounded-l-[100px] overflow-hidden">
            <img src={IMAGES.contact} alt="Contact Support" className="w-full h-full object-cover" />
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 bg-accent text-background-dark p-8 rounded-r-3xl shadow-xl max-w-sm">
              <h3 className="font-serif text-2xl mb-6">Contact Info</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 shrink-0 mt-1" />
                  <span className="text-sm font-medium">123 Serengeti Road, Arusha, Tanzania</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 shrink-0" />
                  <span className="text-sm font-medium">+255 712 345 678</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 shrink-0" />
                  <span className="text-sm font-medium">needhelp@company.com</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
