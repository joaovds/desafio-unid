import React from 'react';
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const Routes: React.FC = function () {
  return (
    <BrowserRouter>
      <Switch>
        ￼ <Route path="/" element={<Home />} />
        <Route path="movie/:idMovie" element={<MovieDetails />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
