import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  Route,
  Switch,
} from 'react-router-dom';
import CreateMessage from './components/CreateMessage';
import { fakeTopic, fakeMessageList } from './lib/fakeUtils';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path={`/${fakeTopic}`}
          component={() => <Home topic={fakeTopic} messageList={fakeMessageList} />}
        />
        <Route
          path={`/${fakeTopic}/newMessage`}
          component={() => <CreateMessage topic={fakeTopic} onCreateMessage={(message) => console.log(message)} />}
        />
      </Switch>
    </div>
  );
}

export default App;
