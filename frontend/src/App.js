import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login/Login.js';
import Navbar from './components/Navbar/Navbar.js';
import Register from './components/Register/Register.js';
import Homepage from './components/Homepage/Homepage.jsx';
import Termandconditions from './components/Termandconditions.jsx';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route
          path='/termsandconditions'
          element={<Termandconditions></Termandconditions>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
