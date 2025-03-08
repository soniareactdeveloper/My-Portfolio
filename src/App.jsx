import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import './App.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
     </Route>

      
  
    </Routes>
  );
}

export default App;
