import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.css';
import './styles/new_style.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCompany from './components/company/AddCompany';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainApp />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

function MainApp() {
  const isAuth = useSelector((state) => state.counter.isAuth || localStorage.getItem("isAuth") === "true");
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    if (isAuth && location.pathname === '/') {
      navigate('/dashboard');
    } else if (!isAuth && location.pathname !== '/') {
      navigate('/');
    }
  }, [isAuth, navigate, location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        {!isAuth && (
          <Route path='/' element={<Home />} />
        )}
        {isAuth &&
          <>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/add-company' element={<AddCompany />} />
          </>
        }
      </Routes>

      <Footer />
    </>
  );
}

export default App;
