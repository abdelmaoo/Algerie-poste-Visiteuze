import List  from "./components/admin/gestion/list";
import Recept  from "./components/user/reception/reception";
import './App.css';
import ListRdv from "./components/admin/rdvs/listRdv";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Login from "./components/login.js";
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
    <Route path="/rdvs" element={<ListRdv />} />
    </Routes>
    </div>
    </div>
  </Router>
  
  );
  
}


export default App;
