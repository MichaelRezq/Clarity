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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestPage from "./Pages/Guest/GuestPage.js";
import JobCard from "./components/Defaults/JobCard.js";
import Group from "./components/Defaults/GroupCard.js";
import NotFound from "./components/NotFound/NotFound.js";
import UserPage from "./Pages/USer/UserPage.js";
import Home from "./Pages/Home/Home.js";
import ChatCard from "./components/Defaults/ChatCard.js";
import Video from "./Pages/Video/Videos.js";
import Stories from "./Pages/Stories/Stories.js";
import Shop from "./Pages/Shop/Shop.js";
import Settings from "./Pages/USer/Settings.js";
import DefaultBadge from "./components/Defaults/BadgeCard.js";
import EmailBox from "./components/Defaults/EmailBoxCard.js";
import Hotels from "./Pages/Hotels/Hotels.js";
import Events from "./Pages/Events/Events.js";
import LiveStreamCard from "./components/Defaults/LiveStreamCard.js";
import DefaultAnalytics from "./components/Defaults/DefaultAnalytics.js";
import LeftSideBar from "./components/generals/LeftSideBar.js";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <LeftSideBar />
      <Routes>
        {/* <Route path="/" element={<GuestPage />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<JobCard />} />
        {/* <Route path="/chat" element={<ChatCard />} /> */}
        {/* <Route path="/videos" element={<Video />} /> */}
        {/* <Route path="/stories" element={<Stories />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/badges" element={<DefaultBadge />} /> */}
        {/* <Route path="/jobs/:jobid" element={<JobCard />} /> */}
        {/* <Route path="/comunity" element={<Group />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/liveStream" element={<LiveStreamCard />} /> */}
        {/* <Route path="/analytics" element={<DefaultAnalytics />} /> */}

        {/* <Route path="/hotels" element={<Hotels />} /> */}
        {/* <Route path="/emailbox" element={<EmailBox />} /> */}
        {/* <Route path="problems" element={<Problems />}/> */}
        {/* <Route path="problems/add" element={<AddProblem />}/> */}
        {/* <Route path="problems/:problemid" element={<SingleProblem />}/> */}
        <Route path="/profile" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* <BrowserRouter>
    <Routes>
    <Route path="/test" element={<LeftSideBar />} />
    </Routes>
    </BrowserRouter> */}
    </>

  );
}

export default App;
