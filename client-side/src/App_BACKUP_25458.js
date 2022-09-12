<<<<<<< HEAD
import Table from './components/admin/gestion/table';
=======
import Table  from "./components/admin/gestion/table";
>>>>>>> add-RDVP
import './App.css';
import { BrowserRouter as Router , Switch ,Route } from "react-router-dom";
import Login from "./components/login.js";
import RendezVous from "./components/rdvnp";

function App() {
  return (
   <Router>
<div className="App">
<<<<<<< HEAD
  
  


    {/* <Login /> */}
    <Table/>

  
    
=======
<div className="content">
  <Switch>
  <Route exact path="/">
    <Login />
    </Route>
    <Route exact path="/table">
    <Table />
    </Route>
    <Route exact path="/rendezvous">
    <RendezVous />
    </Route>

    </Switch>
>>>>>>> add-RDVP
    </div>
    </div>
    </Router>
  
  );
  
}


export default App;
