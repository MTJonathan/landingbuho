import Banner from "./components/Banner/Banner";
import "./assets/style/App.css";
import Logos from "./components/Logos/Logos";
import About from "./components/About/About";

function App() {
  return (
    <main className="m-8 z-10">
      <Banner />
      <Logos />
      <About />
    </main>
  );
}

export default App;
