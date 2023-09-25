import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Work from "./pages/WorkEx/Work";

function App() {
  return (
    <>
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
        <h4 className="text-center mb-3 ms-3">
          Made With 🥰 Umair Ahmed &copy; 2023
        </h4>
      </div>

    </>
  );
}

export default App;
