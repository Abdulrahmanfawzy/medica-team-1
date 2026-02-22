import { Route, Routes } from "react-router-dom";
import OnlineConsultation from "./pages/online_consultation/page.tsx";
import WaitingRoom from "./pages/online_consultation/Components/waiting_room/page.tsx";
import VideoCall from "./pages/online_consultation/videoCall/page.tsx";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<OnlineConsultation />} />
                <Route path="/waiting_room" element={<WaitingRoom />} />
                <Route path="/video_call" element={<VideoCall />} />
            </Routes>
        </div>
    );
};

export default App;
