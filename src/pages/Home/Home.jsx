import Slider from "../../components/Slider";
import LivroHero from "../../components/Hero/Livro";
import HomeGallery from "../Gallery/HomeGallery";

export default function Home() {
  return (
    <div>
      <Slider />
      <LivroHero/>
      <HomeGallery/>
    </div>
  );
}