import "./App.css";
import Nav from "./components//Nav";
import Navbar from "./components/Navbar";
import HeaderPart from "./components/HeaderPart";
import Featured from "./components/Featured";
import AboutMatter from "./components/AboutMatter";
import Explore from "./components/Explore";
import Shop from "./components/Shop";
import RecommendedVideos from "./components/RecommendedVideos";
import AsYouSeen from "./components/AsYouSeen";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Nav />
        <Navbar />
        <HeaderPart />
      </div>
      <Featured />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <AsYouSeen />
      <Footer />
    </div>
  );
}
export default App;
