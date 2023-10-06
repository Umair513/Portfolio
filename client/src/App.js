import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Work from "./pages/WorkEx/Work";
import ScrollToTop from "react-scroll-to-top"
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada"
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <MobileNav></MobileNav>
        <Layout> </Layout>
        <div className="container">
          <About></About>
          <Education></Education>
          <Techstack></Techstack>
          <Projects></Projects>
          <Work></Work>
          <Contact></Contact>
        </div>
        <div className="footer">
          <Tada>
            <h4 className="text-center pb-3 ms-3">
              Made With 🥰 Umair Ahmed &copy; 2023
            </h4>
          </Tada>

        </div>
      </div>
      <ScrollToTop smooth style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} color="#f29f67"></ScrollToTop>

    </>
  );
}

export default App;
