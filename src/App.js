import Header from './Layouts/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './Pages/Style.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog/create" element={<Create />} />
        <Route path="/blog/edit/:id" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
