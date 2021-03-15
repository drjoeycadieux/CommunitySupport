import "./styles.css";
import Home from "./views/Home";
import AlertBanner from "./components/AlertBanner";
import Footer from "./components/Footer";
import SupportInfo from "./components/SupportInfo";
import About from "./views/About";
import CovidNews from "./views/CovidNews";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AlertBanner />
      <About />
      <CovidNews />
      <SupportInfo />
      <Footer />
    </div>
  );
}
