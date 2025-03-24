import Banner from "./components/Banner/Banner";
import Logos from "./components/Logos/Logos";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Action from "./components/Action/Action";
import Testimonial from "./components/Testimonial/Testimonial";
import Suscribe from "./components/Suscribe/Suscribe";
import "./assets/style/App.css";

function App() {
  return (
    <main className="m-8 z-10">
      <Banner />
      <Logos />
      <About />
      <Features />
      <Action />
      <Testimonial />
      <Suscribe />
    </main>
  );
}

export default App;
