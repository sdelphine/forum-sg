import React from 'react';
import './App.css';
import Topic from './components/Topic';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateMessage from './components/CreateMessage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} render={() => <Home />}/>
        <Route exact path={"/:topic"} render={(props) => <Topic { ...props.match.params } />}/>
        <Route exact path={"/:topic/newMessage"} render={
          (props) => <CreateMessage
            { ...props.match.params }
            onCreateMessage={(message) => console.log(message)} />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
