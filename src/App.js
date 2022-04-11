import './App.css';
import {Switch, Route} from 'react-router-dom'
import {members} from './array'
import Home from './components/Home'
import Company from './pages/Company';
import Customer from './pages/Customer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/customer/:id'>
            <Customer members={members}/>
          </Route>
          <Route exact path='/company/:id'>
            <Company members={members}/>
          </Route>
          <Route exact path='/'>
            <Home members={members}/>
          </Route>    
        </Switch>
      </header>
    </div>
  );
}

export default App;
