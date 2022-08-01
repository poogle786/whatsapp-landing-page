import Header from "./components/common/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/features/feature";
import Mockups from "./components/MockSection";
import Security from "./components/SecuritySection";
import Footer from "./components/common/Footer";
import AppRating from "./components/ratings";
import WindowPeak from "./components/window_peak";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Mockups />
      <Feature />
      <Security />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <AppRating />
      <Footer />
    </>
  );
}

export default App;
