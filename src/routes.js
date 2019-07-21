import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import 'normalize.css'
const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/new' exact component={New} />
  </Switch>
)

export default Routes