import React from 'react';
import { 
  BrowserRouter, Switch, Route, useParams, useLocation 
} from 'react-router-dom'

import Home from './component/Home'
import Resume from './component/Resume'
import PageNotFound from './component/PageNotFound'
import Unifbv from './component/unifbv/Unifbv'
import Period from './component/unifbv/Period'

import './static/css/Main.css';
import './static/css/Style.css';
import './static/css/Custom.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/resume" exact={true} component={Resume} />
          <Route path="/unifbv" exact={true} component={Unifbv} />
          <Route path="/unifbv/:period" exact={true}>
            <Child />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </ BrowserRouter>
  );
}

function Child() {
  let { period } = useParams();
  return (
    <Period period={period} />
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <PageNotFound />
  );
}

export default App;
