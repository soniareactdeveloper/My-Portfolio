import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
