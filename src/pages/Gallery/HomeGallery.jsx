import { Link } from "react-router-dom";
import { galleryImages } from "../../Data/gallery";

export default function HomeGallery() {

  // 👇 pega só algumas imagens (ex: 6)
  const images = galleryImages.slice(0, 5);

  return (
    <section className="bg-base-100 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          {/* TEXTO */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-semibold uppercase text-sm mb-2">
              Galeria
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nossa história em fotos
            </h2>

            <p className="text-base-content/70 mb-6 max-w-md mx-auto lg:mx-0">
              Cada imagem conta uma história e registra nossos momentos
            </p>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              visualizar mais →
            </Link>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-[120px] sm:auto-rows-[150px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl ${
                  img.featured ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src} // 🔥 reaproveitando
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}