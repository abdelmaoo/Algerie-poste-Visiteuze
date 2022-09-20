import List  from "./components/admin/gestion/list";
import Recept  from "./components/user/reception/reception";
import './App.css';
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Login from "./components/login.js";
import RendezVous from "./components/user/rdvnp";
import Home from "./components/admin/dashboard/Home";



function App() {
  return (
   <Router>
<div className="App">
<div className="content">
  <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route path="/rdv" element={<Recept />} />
    <Route path="/table" element={<List />} />
    <Route path="/dashboard" element={<Home />} />
    </Routes>
    </div>
    </div>
  </Router>
  
  );
  
}


export default App;
