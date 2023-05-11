import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAnimate, usePresence } from "framer-motion";
// import ClipLoader from "react-spinners";

import Navigation from "./components/Nav/Navigation";
import Hero from "./features/Hero/Hero";
import Body from "./features/Body/Body";
import Contact from "./features/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) { 
      animate(
        scope.current,
        { opacity: [0,1] },
        { duration: 0.5, delay: 0.2 }
      );
    }
  }, []);
  return (
    <>
      <div ref={scope}>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Hero />
        <Body />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
