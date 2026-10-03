import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { text: "The service was exceptional, and the rooms were breathtaking. A truly luxurious experience from start to finish.", author: "Jane Doe", role: "Business Traveler" },
  { text: "We spent our anniversary here and it was perfect. The attention to detail and the staff's warmth made it unforgettable.", author: "John Smith", role: "Couple" },
  { text: "The dining options were fantastic, and the spa facilities are among the best I've ever visited.", author: "Emily Chen", role: "Vacationer" },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-background-alt overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Quote className="w-16 h-16 text-accent mx-auto mb-10 opacity-50" />
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <p className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed mb-10">"{t.text}"</p>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-serif text-foreground mb-1">{t.author}</h4>
                  <span className="text-xs uppercase tracking-widest text-accent">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-background-dark flex items-center justify-center hover:border-accent hover:text-accent transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn("w-2 h-2 rounded-full transition-all", i === selectedIndex ? "bg-accent scale-150" : "bg-background-dark")} 
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-background-dark flex items-center justify-center hover:border-accent hover:text-accent transition-colors" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
