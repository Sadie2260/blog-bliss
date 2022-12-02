import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register";
import SinglePost from "./pages/singlepost/SinglePost";
import Profile from "./pages/profile/Profile";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { AuthContext } from "../src/ContextApi/authContext";
function App() {
  const { currentUser }=useContext(AuthContext);
  return (
   <div>
   <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/register" exact element={ currentUser ? <Home/> : <Register/>}/>
    <Route path="/login" exact element={ currentUser ? <Home/> : <Login/>}/>
    <Route path="/Write" exact element={ currentUser ? <Write/> : <Register/>}/>
    <Route path="/About" exact element={<About/>}/>
    <Route path="/post/:postid" exact element ={<SinglePost/>}/>
    <Route path="/Settings" exact element ={ currentUser? <Profile/> : <Login/>}/>
  </Routes> 
  </div>
  );
}

export default App;
