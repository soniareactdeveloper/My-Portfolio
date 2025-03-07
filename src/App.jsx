import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
     </Route>

      
  
    </Routes>
  );
}

export default App;
