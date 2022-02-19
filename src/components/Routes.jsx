import React from 'react'
import {Switch, Route, Navigate} from 'react-router-dom'
import { Results } from './Results';

export const Routes =()=> {
  return (
    <div className='p-4'>
        <Switch>
          <Route exact path='/'>
              <Navigate to="/search"/>
          </Route>
          <Route exact path={['/search', '/images', '/news', '/videos']}>
            <Results/>
          </Route>
        </Switch>
    </div>
  );
}
