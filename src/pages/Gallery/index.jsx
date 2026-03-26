import { galleryImages } from "../../Data/gallery";

export default function Gallery() {
  return (
    <div className="bg-base-100 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span className="relative z-10 font-bold">
              Nossa mini
              <span
                className="from-primary absolute start-0 bottom-1 -z-10 h-0.5 w-full bg-gradient-to-r to-transparent to-80%"
                aria-hidden="true"
              ></span>
            </span>{" "}
            Galeria
          </h2>

          <p className="text-base-content/80 text-xl">
            deixando registrado nossas memorias em site
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-box ${
                img.featured ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}