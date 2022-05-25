import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyProfile from './Pages/DashBoard/MyProfile';
import MyReview from './Pages/DashBoard/MyReview';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/purchase'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
        <Route
          path='/purchase/:productId'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard>
              </Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='myportfolio' element={<MyProfile />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
