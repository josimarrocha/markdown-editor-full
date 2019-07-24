import React, { useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadingFilesStorage } from './reducers/files/actionsCreators'
import Routes from './routes'
import Header from './components/Header'
import Menu from './components/Menu'

function App({ loadingFilesStorage }) {
  useEffect(() => {
    loadingFilesStorage()
  }, [])
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

export default connect(null, { loadingFilesStorage })(App)
