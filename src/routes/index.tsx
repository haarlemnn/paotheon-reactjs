import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import BakeryList from '../pages/BakeryList';
import BakeryRegister from '../pages/BakeryRegister';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bakeries" component={BakeryList} />
      <Route path="/new-bakery" component={BakeryRegister} />
    </Switch>
  );
}

export default Routes;