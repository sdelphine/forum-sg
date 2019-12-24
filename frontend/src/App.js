import React from 'react';
import './App.css';
import Topic from './topics/Topic';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateMessage from './messages/CreateMessage';
import Home from './misc/Home';

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
