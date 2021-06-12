import React from 'react'
import Game from './components/Game';
import Start from './components/Start';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return(
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Start/>
          </Route>
          <Route path='/game'>
            <Game/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;