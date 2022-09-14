import List  from "./components/admin/gestion/list";
import './App.css';
import { BrowserRouter as Router , Switch ,Route , Routes} from "react-router-dom";
import Login from "./components/login.js";
import RendezVous from "./components/rdvnp";


function App() {
  return (
   <Router>
<div className="App">
<div className="content">
  <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route path="/rdv" element={<RendezVous />} />
    <Route path="/table" element={<List />} />
    </Routes>
    </div>
    </div>
  </Router>
  
  );
  
}


export default App;
