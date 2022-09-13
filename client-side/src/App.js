import List  from "./components/admin/gestion/list";
import './App.css';
import { BrowserRouter as Router , Switch ,Route } from "react-router-dom";
import Login from "./components/login.js";
import RendezVous from "./components/rdvnp";


function App() {
  return (
   <Router>
<div className="App">
<div className="content">
  <Switch>
  <Route exact path="/">
    <Login />
    </Route>
    <Route exact path="/table">
    <List />
    </Route>
    <Route exact path="/rdv">
    <RendezVous />
    </Route>

    </Switch>
    </div>
    </div>
    </Router>
  
  );
  
}


export default App;
