import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { saveAs } from 'file-saver'
import { menuToggle, viewsContainerToggle } from '../../reducers/ui/actionsCreators'
import './styles.css'

const Header = ({ menuToggle, ui, viewsContainerToggle, currentFile }) => {
  const [, setIsChangeMarkdown] = useState(false)
  const [file, setFile] = useState('')
  const [views, setVisibleViews] = useState({
    markIn: null,
    markOut: null
  })
  useEffect(() => {
    setVisibleViews({ ...ui.containersView })
    if (ui.lengthMarkdown > 0) {
      setIsChangeMarkdown(true)
    }
    const currentEditFile = () => {
      const idFile = Object.keys(currentFile)[0]
      if (idFile === undefined) return false
      setFile({
        name: currentFile[idFile].nameFile,
        text: currentFile[idFile].text
      })
    }
    currentEditFile()
  }, [ui, currentFile])

  const saveFileHd = () => {
    const blob = new Blob([file.text], { type: "text/plain;charset=utf-8" })
    saveAs(blob, file.name + '.md')
  }

  return (
    <header>
      <div className="container-header">
        <h1>Markdown Editor</h1>
        <div className="text-saving">
          <p>{ui.isSaving ? 'Salvando...' : 'Salvo!'}</p>
        </div>
        <p style={{ fontWeight: 500 }}>Nome do arquivo: {
          file.name
        }</p>
        <div className="doanload-icone" onClick={saveFileHd}>
          <i className="fas fa-download"></i>
        </div>
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
  ui: state.ui,
  currentFile: state.files.currentEditFile
})

export default connect(mapStateToProps, { menuToggle, viewsContainerToggle })(Header)
