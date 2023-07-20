import Header from './Layouts/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import './Content.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
