import React from 'react';
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = function () {
  return (
    <BrowserRouter>
      <Switch>
        ￼ <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
