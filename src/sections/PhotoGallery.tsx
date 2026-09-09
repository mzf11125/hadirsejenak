import { useEffect, useRef } from "react";
import SectionHead from "../components/SectionHead.tsx";
import { gallery } from "../data/site.ts";

function applySpan(grid: HTMLDivElement, img: HTMLImageElement) {
  const styles = getComputedStyle(grid);
  const rowHeight = parseFloat(styles.getPropertyValue("grid-auto-rows"));
  const rowGap = parseFloat(styles.getPropertyValue("row-gap"));
  const span = Math.ceil(
    (img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap),
  );
  img.style.gridRowEnd = `span ${span}`;
}

export default function PhotoGallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const resizeAll = () => {
      grid.querySelectorAll("img").forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          applySpan(grid, img as HTMLImageElement);
        }
      });
    };

    const observer = new ResizeObserver(resizeAll);
    observer.observe(grid);
    resizeAll();

    return () => observer.disconnect();
  }, []);

  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead title={gallery.heading} note={gallery.note} />
        <div className="gallery-masonry" ref={gridRef}>
          {gallery.images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                const grid = gridRef.current;
                if (!grid) return;
                applySpan(grid, e.currentTarget);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
