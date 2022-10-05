import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login/Login.js';
import Navbar from './components/Navbar/Navbar.js';
import Register from './components/Register/Register.js';
import Homepage from './components/Homepage/Homepage.jsx';
import Termandconditions from './components/Termandconditions.jsx';
import { Pagenotfound } from './components/Pagenotfound.jsx';
import Startpage from './components/Startpage/startpage.jsx';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Startpage></Startpage>} />
        <Route exact path='/startpage' element={<Homepage></Homepage>} />
        <Route
          path='/termsandconditions'
          element={<Termandconditions></Termandconditions>}
        />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/*' element={<Pagenotfound></Pagenotfound>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
