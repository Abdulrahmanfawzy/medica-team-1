// src/router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/auth/pages/LoginPage";
import RegisterPage from "../pages/auth/pages/RegisterPage";
import ForgotPasswordPage from "../pages/auth/pages/ForgotPasswordPage";
import VerifyAccountPage from "../pages/auth/pages/VerifyAccountPage";
import OtpPage from "../pages/auth/pages/OtpPage";

export const router = createBrowserRouter([
  {
    element: <Layout />, // Navbar + Footer
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
      { path: "/verify-account", element: <VerifyAccountPage /> },
      { path: "/otp", element: <OtpPage /> },
    ],
  },
]);
