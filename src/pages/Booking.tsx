import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/Button";

export default function Booking() {
  return (
    <PageTransition>
      <Helmet>
        <title>Reservation - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Reservation" 
        breadcrumb="Home / Booking" 
        image="https://images.unsplash.com/photo-1542314831-c6a4d1409e1?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-background-alt p-8 md:p-12 border border-background-alt/50 shadow-2xl">
            <h2 className="text-3xl font-serif text-foreground mb-8 text-center">Complete Your Booking</h2>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-muted">First Name</label>
                  <input type="text" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-muted">Last Name</label>
                  <input type="text" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-muted">Email Address</label>
                  <input type="email" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-foreground-muted">Phone Number</label>
                  <input type="tel" className="bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors text-foreground" />
                </div>
              </div>

              <div className="border-t border-background-dark pt-8 mt-4 flex justify-between items-center">
                <div>
                  <div className="text-sm text-foreground-muted mb-1">Total Amount</div>
                  <div className="text-2xl font-serif text-accent">$700.00</div>
                </div>
                <Button>Confirm Booking</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
