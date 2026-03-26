// fotos

import banner1 from "../../assets/SliderHome/banner1.mp4";
import banner1Thumb from "../../assets/SliderHome/banner1.png";
import banner2 from "../../assets/SliderHome/banner2.jpg";
import banner3 from "../../assets/SliderHome/banner3.mp4";
import banner3Thumb from "../../assets/SliderHome/banner3.png";
import banner4 from "../../assets/SliderHome/banner4.jpg";

// effects
import { useState, useEffect, useRef } from "react";


export default function Slider() {
  const [items] = useState([
  {
    video: banner1,
    thumb: banner1Thumb,
  },
  {
    img: banner2,
    thumb: banner2,
  },
  {
    video: banner3,
    thumb: banner3Thumb,
  },
  {
    img: banner4,
    thumb: banner4,
  },
]);

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  // clique nas thumbnails
  const handleClick = (index) => {
    setCurrent(index);

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
  };

  return (
    <div className="bg-black text-white text-xs">
      <div className="h-screen w-screen overflow-hidden relative -mt-[50px]">

        {/* SLIDES */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >

            {/* VIDEO OU IMAGEM */}
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={item.img}
                className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-linear"
              />
            )}

            {/* OVERLAY ESCURO (deixa texto mais legível) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* TEXTO */}
            {index === current && (
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] max-w-[1140px] pr-[30%]">
                <h1 className="text-[40px] md:text-[5em] font-bold leading-tight animate-fade">
                  
                </h1>
                <h2 className="text-[40px] md:text-[5em] font-bold text-green-400/80 animate-fade delay-100">
                  {item.type}
                </h2>
                <p className="mt-4 opacity-80 animate-fade delay-200">
                 
                </p>
              </div>
            )}
          </div>
        ))}

        {/* THUMBNAILS */}
        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-3 md:gap-5 z-50 px-4 justify-center w-full max-w-[900px]">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`w-[90px] md:w-[130px] h-[130px] md:h-[200px] flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === current
                  ? "scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.thumb}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMAÇÃO TEXTO */}
      <style>{`
        .animate-fade {
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.2s; }
        .delay-200 { animation-delay: 0.4s; }

        @keyframes fadeUp {
          from {
            transform: translateY(40px);
            filter: blur(6px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            filter: blur(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}