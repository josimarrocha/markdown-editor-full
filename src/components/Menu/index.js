import React from 'react'
import { connect } from 'react-redux'
import { menuToggle, modalToggle, listFilesToggle } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Menu = ({ isMenuOpen, menuToggle, modalToggle, listFilesToggle, loadingFilesStorage }) => {
  return (
    <nav className={`${isMenuOpen && 'menuActive'}`}>
      <div className="container-menu">
        <div className="close-menu" onClick={() => menuToggle(false)}>
          <i className="far fa-times-circle"></i>
        </div>
        <div className="menu-title">
          <h3>Menu</h3>
        </div>
        <ul className='menu-list'>
          <li onClick={() => modalToggle(true)}>Novo arquivo</li>
          <li onClick={() => {
            listFilesToggle(true)
            menuToggle()
          }
          }>Arquivos salvos</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  isMenuOpen: state.ui.isMenuOpen
})

export default connect(mapStateToProps,
  {
    menuToggle,
    modalToggle,
    listFilesToggle
  })(Menu)
