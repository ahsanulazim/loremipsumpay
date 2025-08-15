import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Prefer from "./components/Prefer";
import Returns from "./components/Returns";
import Start from "./components/Start";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Prefer />
      <Returns />
      <Mission />
      <Start />
    </>
  );
}
