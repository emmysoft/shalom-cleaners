import { Route, Routes } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

import Navigation from "./components/Nav/Navigation";
import Hero from "./features/Hero/Hero";
import Body from "./features/Body/Body";
import Contact from "./features/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <motion.div transition={{ delay: 1 }}>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Hero />
        <Body />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
