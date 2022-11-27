import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';
import CreateRecruitment from "./components/MainPage/CreateRecruitment";
import MainPage from "./components/MainPage/MainPage";
import ViewCV from "./components/MainPage/MyRecruitment/ViewCV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/create" element={<CreateRecruitment/>}/>\
        <Route path="/viewCV" element={<ViewCV/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
