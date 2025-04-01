import Banner from "./components/Banner/Banner";
import Logos from "./components/Logos/Logos";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Action from "./components/Action/Action";
import Testimonial from "./components/Testimonial/Testimonial";
import Suscribe from "./components/Suscribe/Suscribe";
import Footer from "./components/Footer/Footer";
import "./assets/style/App.css";

function App() {
  return (
    <main className="m-0 md:m-8 md:z-10">
      <Banner />
      <Logos />
      <About />
      <Features />
      <Action />
      <Testimonial />
      <Suscribe />
      <Footer />
    </main>
  );
}

export default App;
