
import Navbar from "./components/navbar/Navbar";
import Login from './pages/login/Login'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  let getUserValues=(values)=>{
    sessionStorage.setItem("Currentuser",JSON.stringify(values));
  }

 
  return ( 
    <Router>
      <Routes>
         <Route exact path="/" element={<Login userFn={getUserValues}/>} />
         <Route path="/Home" element={<Navbar/>}/>
      </Routes>
    </Router>

  );
}

export default App;
