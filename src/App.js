import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  return (
    <Route>
      <Header />
      <div className="content">
        <Menu />
        <Routes />
      </div>
    </Route>
  );
}

export default App;
