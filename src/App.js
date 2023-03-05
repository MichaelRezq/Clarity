import "./Assets/js/scripts.js";
import "./Assets/css/bootstrap-datetimepicker.css";
// import "./Assets/css/emoji.css"
import "./Assets/css/feather.css";
import "./Assets/css/lightbox.css";
import "./Assets/css/style-rtl.css";
import "./Assets/css/style.css";
import "./Assets/css/themify-icons.css";
import "./Assets/css/video-player.css";
import HelpPage from "./Pages/Help/HelpPage";
import Navbar from "./components/generals/Navbar.js";
import Login from "./Pages/Registeration/Login.js";
import ComunityPage from "./Pages/Comunity/ComunityPage.js";
import AcountInfo from "./Pages/USer/AcountInfo.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HelpPage />
      <ComunityPage />
      <Login />
      <AcountInfo />
    </div>
  );
}

export default App;
