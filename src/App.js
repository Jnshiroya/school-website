import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Alert from './component/Alert';
import AddStudent from './component/AddStudent';
function App() {
  const [alert, setAlert] = useState(null);
  const showalert = (type, message) => {
    setAlert({ type: type, message: message })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
    <Navbar showalert={showalert} />
    <Alert alert={alert} />
    <Routes>
    <Route exact path="/" element={<Home showalert={showalert}/>}></Route>
    <Route exact path="/login" element={<Login showalert={showalert}/>}></Route>
    <Route exact path="/addstudent" element={<AddStudent showalert={showalert}/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
