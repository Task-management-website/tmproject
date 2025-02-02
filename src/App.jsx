import React from "react";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
// import SignupForm from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";
// import { Home } from "lucide-react";

function App() {
  return (
    <div>

  <Routes>

    <Route path="/" element={<Register/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    </Routes>
    </div>
  
  );
}

export default App;
