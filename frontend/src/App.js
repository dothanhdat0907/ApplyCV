import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';
import Dashboard from "./components/MainPage/Dashboard/Dashboard";
import MyRecruitment from "./components/MainPage/MyRecruitment/MyRecruitment";
import Profile from "./components/MainPage/Profile/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/mainpage" element={<Dashboard />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/MyRecruitment" element={<MyRecruitment />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
