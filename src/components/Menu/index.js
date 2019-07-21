import React from 'react'
import { connect } from 'react-redux'
import { menuToggle } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Menu = ({ isMenuOpen, menuToggle }) => {
  return (
    <nav className={`${isMenuOpen && 'menuActive'}`}>
      <div className="container-menu">
        <div className="close-menu" onClick={menuToggle}>
          <i className="far fa-times-circle"></i>
        </div>
        <div className="menu-title">
          <h3>Menu</h3>
        </div>
        <ul className='menu-list'>
          <li>Novo arquivo</li>
          <li>Editar arquivo</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  isMenuOpen: state.ui.isMenuOpen
})

export default connect(mapStateToProps, { menuToggle })(Menu)
