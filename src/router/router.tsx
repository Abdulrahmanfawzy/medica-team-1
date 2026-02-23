import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/auth/pages/LoginPage";
import RegisterPage from "../pages/auth/pages/RegisterPage";
import ForgotPasswordPage from "../pages/auth/pages/ForgotPasswordPage";
import VerifyAccountPage from "../pages/auth/pages/VerifyAccountPage";
import OtpPage from "../pages/auth/pages/OtpPage";
import OnlineConsultation from "@/pages/online_consultation/page.tsx";
import WaitingRoom from "@/pages/online_consultation/Components/waiting_room/page";
import VideoCall from "@/pages/online_consultation/videoCall/page";
import AppointmentsPage from "@/pages/profile/appointments/AppointmentsPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/online_consultation",
        element: <OnlineConsultation />,
      },
      {
        path: "/waiting_room",
        element: <WaitingRoom />
      },
      {
        path: "/video_call",
        element: <VideoCall />
      },
      {
        path: "/profile/appointments",
        element: <AppointmentsPage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/verify-account", element: <VerifyAccountPage /> },
  { path: "/otp", element: <OtpPage /> },
]);
