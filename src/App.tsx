
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/pages/LoginPage";
import RegisterPage from "./pages/auth/pages/RegisterPage";
import ForgotPasswordPage from "./pages/auth/pages/ForgotPasswordPage";
import VerifyAccountPage from "./pages/auth/pages/VerifyAccountPage";
import OtpPage from "./pages/auth/pages/OtpPage";
import { Toaster } from "react-hot-toast";

export const router = createBrowserRouter([

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  {
    path: "/verify-account",
    element: <VerifyAccountPage />,
  },

  {
    path: "/otp",
    element: <OtpPage />,
  },

]);

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  )
};

export default App;
