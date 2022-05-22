import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/DashBoard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <footer />
    </div>
  );
}

export default App;
