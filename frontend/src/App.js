import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';
import CreateRecruitment from "./components/MainPage/CreateRecruitment";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/create" element={<CreateRecruitment/>}/>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
