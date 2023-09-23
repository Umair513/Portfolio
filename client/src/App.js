import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
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
      </div>


    </>
  );
}

export default App;
