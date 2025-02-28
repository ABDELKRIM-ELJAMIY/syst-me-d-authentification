import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Login from "./pages/login";
import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
import Navbar from "./compenents/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
