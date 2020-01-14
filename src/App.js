import React from 'react';
import { 
  Route, useParams, HashRouter
} from 'react-router-dom'

import Home from './component/Home'
import Resume from './component/Resume'
import Unifbv from './component/unifbv/Unifbv'
import Period from './component/unifbv/Period'

import './static/css/Main.css';
import './static/css/Style.css';
import './static/css/Custom.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/resume" exact={true} component={Resume} />
      <Route path="/unifbv" exact={true} component={Unifbv} />
      <Route path="/unifbv/:period" exact={true}>
        <Child />
      </Route>
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
