import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [theme] = useTheme();

  return (
    <BrowserRouter>
      <div id={theme}>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <div className="login-page">
                <Login />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <>
                <MobileNav />
                <Layout />
                <div className="container">
                  <About />
                  <Education />
                  <Techstack />
                  <Projects />
                  <WorkExp />
                  <Contact />
                </div>
                <div className="footer pb-3 pt-5 ms-3">
                  <Tada>
                    <h4 className="text-center">
                      Made With <span className="text-danger">♥</span> Abdul
                      Latif &copy; 2025
                    </h4>
                  </Tada>
                </div>
              </>
            }
          />
        </Routes>
        <ScrollToTop
          smooth
          color="#f29f67"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
