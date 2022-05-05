
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home/Home';
import Inventory from './Components/HomePage/Inventory/Inventory';
import Login from './Components/LoginPages/Login/Login';
import RequireAuth from './Components/LoginPages/RequireAuth/RequireAuth';
import SIgnup from './Components/LoginPages/Signup/SIgnup';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SIgnup></SIgnup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
