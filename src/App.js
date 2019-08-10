import React, { useEffect } from 'react';
import Home from './pages/Home'
import { connect } from 'react-redux'
import { loadingFilesStorage } from './reducers/files/actionsCreators'
import Header from './components/Header'
import Menu from './components/Menu'

function App({ loadingFilesStorage }) {
  useEffect(() => {
    loadingFilesStorage()
  }, [])
  return (
    <>
      <Header />
      <div className="content">
        <Menu />
        <Home />
      </div>
    </>
  );
}

export default connect(null, { loadingFilesStorage })(App)
