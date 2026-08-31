import SectionHead from "../components/SectionHead.tsx";
import { gallery } from "../data/site.ts";

export default function PhotoGallery() {
  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead title={gallery.heading} note={gallery.note} />
        <div className="gallery-masonry">
          {gallery.images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
