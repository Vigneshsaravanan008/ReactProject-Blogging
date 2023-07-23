import Header from './Layouts/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import './Content.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Pages/Home';
import Create from './Pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
