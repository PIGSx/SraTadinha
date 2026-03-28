import { useState, useRef, useEffect } from "react";

import video1 from "../../assets/You/you1.mp4";
import img1 from "../../assets/You/you2.jpg";
import img2 from "../../assets/You/you3.jpg";
import img3 from "../../assets/You/you4.jpg";

export default function You() {
  const gallery = [
    {
      type: "video",
      src: video1,
      focuses: [
        { scale: 1.2, x: 0, y: 0 },
        { scale: 2.5, x: -25, y: -10 },
        { scale: 2.5, x: 25, y: -10 },
        { scale: 2.2, x: 0, y: 20 },
      ],
    },
    {
      type: "image",
      src: img1,
      focuses: [
        { scale: 1.2, x: 0, y: 0 },
        { scale: 2, x: -20, y: 0 },
        { scale: 2, x: 20, y: 0 },
        { scale: 2, x: 0, y: 20 },
      ],
    },
    {
      type: "image",
      src: img2,
      focuses: [
        { scale: 1.2, x: 0, y: 0 },
        { scale: 2, x: -20, y: -10 },
        { scale: 2, x: 20, y: -10 },
        { scale: 2, x: 0, y: 20 },
      ],
    },
    {
      type: "image",
      src: img3,
      focuses: [
        { scale: 1.2, x: 0, y: 0 },
        { scale: 2, x: -10, y: 10 },
        { scale: 2, x: 15, y: -10 },
        { scale: 2, x: 0, y: 25 },
      ],
    },
  ];

  const [selectedMedia, setSelectedMedia] = useState(0);
  const [selectedFocus, setSelectedFocus] = useState(0);

  const videoRef = useRef(null);

  const current = gallery[selectedMedia];
  const focus = current.focuses[selectedFocus];

  // reset foco ao trocar mídia
  useEffect(() => {
    setSelectedFocus(0);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [selectedMedia]);

  return (
    <div className="mt-20 min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-6 grid md:grid-cols-2 gap-6">
        {/* LEFT */}
        <div>
          {/* CARD PRINCIPAL */}
          <div className="relative h-[420px] rounded-xl overflow-hidden bg-black">
            {/* blur de fundo */}
            <div className="absolute inset-0 scale-110 blur-2xl opacity-40">
              {current.type === "video" ? (
                <video
                  src={current.src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={current.src} className="w-full h-full object-cover" />
              )}
            </div>

            {/* mídia principal */}
            <div className="relative w-full h-full">
              {current.type === "video" ? (
                <video
                  ref={videoRef}
                  src={current.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-all duration-[1200ms]"
                  style={{
                    transform: `scale(${focus.scale}) translate(${focus.x}%, ${focus.y}%)`,
                  }}
                />
              ) : (
                <img
                  src={current.src}
                  className="w-full h-full object-cover transition-all duration-[1200ms]"
                  style={{
                    transform: `scale(${focus.scale}) translate(${focus.x}%, ${focus.y}%)`,
                  }}
                />
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* THUMBNAILS (FOCOS) */}
          <div className="flex gap-3 mt-4">
            {current.focuses.map((f, index) => (
              <button
                key={index}
                onClick={() => setSelectedFocus(index)}
                className={`w-[80px] h-[80px] rounded-lg overflow-hidden ${
                  selectedFocus === index
                    ? "ring-2 ring-white scale-105"
                    : "opacity-60"
                }`}
              >
                {current.type === "video" ? (
                  <video
                    src={current.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${f.scale}) translate(${f.x}%, ${f.y}%)`,
                    }}
                  />
                ) : (
                  <img
                    src={current.src}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${f.scale}) translate(${f.x}%, ${f.y}%)`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-3xl font-bold mb-4">Minha Princesa 💜</h1>

          {/* BOTÕES PRINCIPAIS */}
          <div className="flex gap-3 mb-6">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedMedia(index)}
                className={`w-12 h-12 rounded-lg ${
                  selectedMedia === index
                    ? "bg-white text-black"
                    : "bg-neutral-800 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <p className="text-gray-900 text-sm">
            Cada miniatura guarda um detalhe — um traço, um gesto, uma beleza
            que só existe nela. E, no fim, tudo se conecta naquilo que mais
            importa: a forma única como eu a vejo. você é perfeita!Cada número
            muda o momento. Cada miniatura mostra um detalhe diferente desse
            mesmo instante ✨
          </p>
        </div>
      </div>
    </div>
  );
}
