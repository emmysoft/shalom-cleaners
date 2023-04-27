import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import Hero from "./features/Hero/Hero";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Hero/>
      </div>
    </>
  );
}

export default App;
