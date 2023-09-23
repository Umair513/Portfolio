import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <>
      <Layout> </Layout>
      <div className="container">
        <About></About>
        <Techstack></Techstack>
        <Projects></Projects>
      </div>


    </>
  );
}

export default App;
