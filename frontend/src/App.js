import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';
import MainPage from './components/MainPage/MainPage'
import MyRecruitment from "./components/MyRecruitment/MyRecruitment";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/MyRecruitment" element={<MyRecruitment />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
