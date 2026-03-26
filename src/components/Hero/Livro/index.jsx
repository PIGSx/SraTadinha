import { Link } from "react-router-dom";

export default function LivroHero() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Nossa Pequena História
        </h1>

        <p className="mt-4 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
          Você gostou do livro, amor?<br />
          Caso queira adquiri-lo em mais uma versão, abaixo há um botão para download dele em PDF.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Download */}
          <a
            href="/livro.pdf"
            download
            className="px-6 py-3 rounded-full text-white font-medium 
            bg-gradient-to-r from-purple-500 to-indigo-500 
            hover:opacity-90 transition inline-block"
          >
            download
          </a>

          {/* Surpresa */}
          <Link
            to="/you"
            className="px-6 py-3 rounded-full text-white font-medium 
            border border-gray-600 bg-gray-800/40 
            hover:bg-gray-700/50 transition inline-block"
          >
            surpresa
          </Link>
        </div>
      </div>
    </section>
  );
}