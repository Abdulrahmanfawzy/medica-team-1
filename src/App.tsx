// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import { Toaster } from "./components/ui/sonner";
const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
