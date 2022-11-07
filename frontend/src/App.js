import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import SignUp from './components/Login/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
