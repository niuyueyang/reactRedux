import React from 'react';
import { Route, Switch, Redirect, BrowserRouter,hashHistory } from 'react-router-dom';
import Home from './../Home';
import Test from './../components/Test';

const Root = () => (
  <div>
    <Switch>
      <Route
        path="/"
        render={props => (
          <App>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/test" component={Test} />
              {/*路由不正确时，默认跳回home页面*/}
              <Route render={() => <Redirect to="/test" />} />
            </Switch>
          </App>
        )}
      />
    </Switch>
  </div>
);

export default Root;
