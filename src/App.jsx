import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import Hero from "./features/Hero/Hero";
import Body from "./features/Body/Body";
import Contact from "./features/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Hero />
        <Body />
        <Contact />
      </div>
    </>
  );
}

export default App;
