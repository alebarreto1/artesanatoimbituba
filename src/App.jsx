import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Location from "./components/Location";

const App = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Contact />
      <Location />
    </div>
  );
};

export default App;
