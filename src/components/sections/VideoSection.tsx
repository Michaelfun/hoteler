import { IMAGES } from "@/data/images";
import { Play } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

export function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.videoPoster} 
            alt="Hotel Video" 
            className="w-full h-full object-cover brightness-[0.7]" 
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-24 h-24 flex items-center justify-center rounded-full bg-accent/90 hover:bg-accent transition-colors mb-8"
            aria-label="Play video"
          >
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-50" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-[-20px] rounded-full border border-accent/30 animate-ping opacity-30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
            
            <Play className="w-8 h-8 text-background-dark ml-1" />
          </button>
          
          <h2 className="text-4xl md:text-6xl font-serif text-foreground text-center">
            Explore Our Hotel
          </h2>
        </div>
      </section>

      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <div className="aspect-video w-full bg-black">
          {/* Placeholder for iframe */}
          <div className="w-full h-full flex items-center justify-center text-foreground-muted">
            Video Player Placeholder
          </div>
        </div>
      </Modal>
    </>
  );
}
