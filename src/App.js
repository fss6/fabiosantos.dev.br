import React from 'react';
import { 
  Route, useParams, HashRouter
} from 'react-router-dom'

import Home from './component/Home'
import Resume from './component/Resume'

import './static/css/Main.css';
import './static/css/Style.css';
import './static/css/Custom.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/resume" exact={true} component={Resume} />
    </ HashRouter>
  );
}

function Child() {
  let { period } = useParams();
  return (
    <Period period={period} />
  );
}

export default App;
