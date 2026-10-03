import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-background-dark pt-20 border-t border-background-alt relative z-10">
      <div className="container mx-auto px-6 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40L15 20L25 30L30 15L35 30L45 20L50 40H10Z" stroke="#b8895b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 45H50" stroke="#b8895b" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest text-foreground uppercase leading-none mb-1">Hoteler</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Luxury Hotel</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Experience the highest level of luxury and comfort at our hotel. We provide world-class amenities for our guests.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-background border border-background-alt px-4 py-3 text-sm focus:outline-none focus:border-accent w-full text-foreground"
              />
              <button type="submit" className="bg-accent text-background-dark px-4 flex items-center justify-center hover:bg-accent-hover transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h3 className="font-serif text-xl text-foreground">Explore</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Special Offers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-xl text-foreground">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">123 Serengeti Road,<br/>Arusha, Tanzania</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+255712345678" className="text-sm hover:text-accent transition-colors">+255 712 345 678</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:needhelp@company.com" className="text-sm hover:text-accent transition-colors">needhelp@company.com</a>
              </li>
            </ul>
          </div>

          {/* Map/Booking CTA */}
          <div className="flex flex-col gap-6">
            <div className="bg-background border border-background-alt p-8 flex flex-col items-center justify-center text-center h-full gap-4">
              <h3 className="font-serif text-xl text-foreground">Need a Room?</h3>
              <p className="text-sm">Book your stay now and get special discounts.</p>
              <Button size="sm" className="mt-2">Book Now</Button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background py-6 border-t border-background-alt text-center flex flex-col md:flex-row justify-between items-center px-6 md:px-8 container mx-auto gap-4">
        <p className="text-xs tracking-wider">
          © {new Date().getFullYear()} Hoteler. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-8 h-8 rounded-full border border-background-alt flex items-center justify-center hover:bg-accent hover:text-background-dark hover:border-accent transition-all text-xs font-medium">
            FB
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-background-alt flex items-center justify-center hover:bg-accent hover:text-background-dark hover:border-accent transition-all text-xs font-medium">
            TW
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-background-alt flex items-center justify-center hover:bg-accent hover:text-background-dark hover:border-accent transition-all text-xs font-medium">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}
