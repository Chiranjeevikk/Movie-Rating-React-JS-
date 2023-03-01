import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Addmovie from './Components/Addmovie';
import Moviedetails from './Components/Moviedetails';
import Updatemovie from './Components/Updatemovie';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Searchmovie from './Components/Searchmovie';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>

            <Route exact path="/">     
              <Home/>
            </Route>

            <Route path="/addmovie">
              <Addmovie/>
            </Route>

            <Route path="/moviedetail:id">  
              <Moviedetails/>
            </Route>

            <Route path="/update:id">
              <Updatemovie/>
            </Route>

            <Route path="/searchmovie:searchKeyword">
              <Searchmovie/>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}
export default App;
