import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Menu from "./pages/menu/Menu"
import About from "./pages/about/About";
import Login from "./pages/login/Login";


function App() {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/menu" element={<Menu/>}/>  
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>

   </Routes>
  );
}

export default App;
