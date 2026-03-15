// layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = () => {
  return (
    <div style={styles.container}>
      <Navbar />

      <main style={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }as const,
  main: {
    flex: 1,
    padding: "20px",
  },
};

export default Layout;
