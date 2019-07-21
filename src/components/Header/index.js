import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { menuToggle } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Header = ({ menuToggle, saving }) => {
  const [isChangeMarkdown, setIsChangeMarkdown] = useState(false)
  useEffect(() => {
    if (saving.lengthMarkdown > 0) {
      setIsChangeMarkdown(true)
    }
  }, [saving])
  return (
    <header>
      <div className="container-header">
        <h1>Markdown Editor</h1>
        <div className="text-saving">
          <p>{!isChangeMarkdown ? '' : saving.isSaving ? 'Salvando...' : 'Salvo!'}</p>
        </div>
        <span className="icone-menu" onClick={menuToggle}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
    </header>
  )
}
const mapStateToProps = state => ({
  saving: state.ui
})

export default connect(mapStateToProps, { menuToggle })(Header)
