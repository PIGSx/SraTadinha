import { useState } from "react";
import img1 from "../../assets/You/you1.jpg"
import img2 from "../../assets/You/you1.jpg"
import img3 from "../../assets/You/you1.jpg"
import img4 from "../../assets/You/you1.jpg"

export default function You() {
const images = [img1, img2, img3, img4];

  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-20 min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-4 md:p-6 grid md:grid-cols-2 gap-6">
        {/* LEFT - IMAGES */}
        <div>
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={images[selected]}
              alt="product"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`min-w-[70px] h-[70px] rounded-lg overflow-hidden border-2 transition ${
                  selected === index ? "border-black" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Minha Princesa
          </h1>

          <p className="text-gray-500 mb-4"></p>

          <p className="mb-2 font-medium">Selecionar Foto</p>

          {/* NUMBER SELECTOR */}
          <div className="flex gap-2 mb-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`w-10 h-10 rounded-lg border transition ${
                  selected === index
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* DESCRIPTION */}
          <div>
            <h2 className="font-semibold mb-2">Descrição</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
