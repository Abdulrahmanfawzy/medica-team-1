import { Link, useLocation } from "react-router-dom";
import CountdownTimer from "../Counter";
import { useState } from "react";
import SideOnWaitingRoom from "../../Components/sideOnWaitingRoom";
export default function WaitingRoom() {
    const [isFinished, setIsFinished] = useState(false);

    const location = useLocation();
    const doctor = location.state;
    return (
        <div className="lg:px-24 md:px-16 px-5 text-black flex md:flex-row flex-col justify-between items-start">
            <div className="md:w-6/12 w-full flex flex-col gap-3 items-center justify-center border mb-5 pb-5 border-gray-300 rounded-4xl md:pt-5">
                <img
                    src={doctor?.image}
                    alt={`Doctor ${doctor?.name} image`}
                    className="lg:w-55.5 lg:h-56 w-100"
                />
                <h2 className="text-[#07595F] font-bold text-3xl">
                    {doctor?.name}
                </h2>
                <p>{doctor?.specialist}</p>

                <p className="font-bold text-2xl">Doctor is ready!</p>
                <p className="">You can now join the consultation</p>
                <div className="flex flex-col items-center justify-center">
                    <p>Ready In</p>
                    <CountdownTimer onFinish={() => setIsFinished(true)} />
                </div>
                <p className="text-[#666666]">Test Your Devices</p>
                <div className="md:flex grid justify-center gap-5">
                    <button className="text-[#097178] border border-[#097178] w-40 bg-white px-4 py-2 rounded-lg cursor-pointer">
                        Test Camera
                    </button>
                    <button className="text-[#097178] border border-[#097178] w-40 bg-white px-4 py-2 rounded-lg cursor-pointer">
                        Test Microphone
                    </button>
                </div>
                <Link state={{ doctor }} to={isFinished ? "/video_call" : "#"}>
                    <button
                        onClick={(e) => {
                            if (!isFinished) {
                                e.preventDefault();
                            }
                        }}
                        className={`mt-5 bg-[#097178] text-white px-6 py-3 rounded-xl ${isFinished ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
                    >
                        {isFinished ? "Join Now" : "Waiting for the Doctor"}
                    </button>
                </Link>
            </div>
            <div className="h-screen md:block hidden bg-[#B3B3B3] w-0.5"></div>
            <SideOnWaitingRoom />
        </div>
    );
}
