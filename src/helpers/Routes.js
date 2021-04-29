import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthors from '../views/AddAuthors';
import Authors from '../views/Authors';
import Home from '../views/Home';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/authors"
          component={() => <Authors authors={authors} setAuthors={setAuthors} />}
        />
        <Route
          path="/add-author"
          component={() => <AddAuthors setAuthors={setAuthors} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
