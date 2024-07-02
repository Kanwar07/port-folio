import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ProjectDetails from "./components/pages/ProjectDetails";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
