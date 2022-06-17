import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post/Post";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import Profile from "./pages/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/posts" element={<Posts />} />
        <Route strict exact path="/signup" element={<Signup />} />
        <Route strict exact path="/signin" element={<Signin />} />
        <Route strict exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
