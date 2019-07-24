import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { menuToggle, viewsContainerToggle } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Header = ({ menuToggle, ui, viewsContainerToggle }) => {
  const [isChangeMarkdown, setIsChangeMarkdown] = useState(false)
  const [views, setVisibleViews] = useState({
    markIn: null,
    markOut: null
  })
  useEffect(() => {
    setVisibleViews({ ...ui.containersView })
    if (ui.lengthMarkdown > 0) {
      setIsChangeMarkdown(true)
    }
  }, [ui])
  return (
    <header>
      <div className="container-header">
        <h1>Markdown Editor</h1>
        {isChangeMarkdown && <div className="text-saving">
          <p>{ui.isSaving ? 'Salvando...' : 'Salvo!'}</p>
        </div>}
        <div className="toggle-containers">
          <span
            className={`${views.markIn && !views.markOut ? 'markIn active' : 'markIn'}`}
            onClick={() => viewsContainerToggle(true, false)} />
          <span
            className={`${views.markIn && views.markOut ? 'both active' : 'both'}`}
            onClick={() => viewsContainerToggle(true, true)} />
          <span
            className={`${!views.markIn && views.markOut ? 'markOut active' : 'markOut'}`}
            onClick={() => viewsContainerToggle(false, true)} />
        </div>
        <span className="icone-menu" onClick={() => menuToggle(true)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
    </header>
  )
}
const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(mapStateToProps, { menuToggle, viewsContainerToggle })(Header)
