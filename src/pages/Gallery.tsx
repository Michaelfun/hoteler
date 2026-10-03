import { PageTransition } from "@/components/layout/PageTransition";
import { PageHero } from "@/components/layout/PageHero";
import { Helmet } from "react-helmet-async";
import { IMAGES } from "@/data/images";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    IMAGES.rooms.junior, IMAGES.rooms.family, IMAGES.rooms.business,
    IMAGES.outdoor.main, IMAGES.outdoor.sub, IMAGES.offers.family,
    IMAGES.experience.layer1, IMAGES.experience.layer2, IMAGES.hero
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery - Hoteler</title>
      </Helmet>
      
      <PageHero 
        title="Our Gallery" 
        breadcrumb="Home / Gallery" 
        image="https://images.unsplash.com/photo-1542314831-c6a4d1409e1?auto=format&fit=crop&w=1920&q=80" 
      />
      
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((src, i) => (
              <div key={i} className="break-inside-avoid cursor-pointer" onClick={() => setSelectedImage(src)}>
                <ImageFrame src={src} alt={`Gallery Image ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <img src={selectedImage} alt="Fullscreen View" className="w-full h-auto max-h-[85vh] object-contain" />
        )}
      </Modal>
    </PageTransition>
  );
}
