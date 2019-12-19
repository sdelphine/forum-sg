import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import CreateMessage from './components/CreateMessage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route path="/newMessage" component={CreateMessage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
