import React from 'react';
import './App.css';
import Topic from './topics/Topic';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateMessagePage from './messages/CreateMessagePage';
import Home from './misc/Home';
import { store } from './store/storeModel';
import { StoreProvider } from 'easy-peasy';

// TODO Persist State : https://codesandbox.io/s/9j2wx1kw4o
function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Switch>
          <Route exact path={"/"} render={() => <Home />} />
          <Route exact path={"/:topic"} render={
            (props) => <Topic {...props.match.params} />} />
          <Route exact path={"/:topic/newMessage"} render={
            (props) => <CreateMessagePage {...props.match.params} />
          }
          />
        </Switch>
      </div>
    </StoreProvider>
  );
}

export default App;
