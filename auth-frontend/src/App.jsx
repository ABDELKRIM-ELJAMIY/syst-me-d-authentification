import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import Navbar from "./compenents/Navbar";
import Home from "./pages/Home";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
function App() {
  console.log("App component is rendering");

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
