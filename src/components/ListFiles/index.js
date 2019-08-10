import React from 'react'
import './styles.css'

const ListFiles = ({
  isListFileOpen,
  listFilesToggle,
  files,
  setFile,
  setTextMarkdown,
  deleteFile,
  editFile,
  currentEditFile
}) => {
  const handleEditFile = (id) => {
    setFile({
      id: files[id].id,
      nameFile: files[id].nameFile,
      text: files[id].text
    })
    editFile(files[id].id, files[id].text)
    setTextMarkdown(files[id].text)
  }

  const colorFileSelected = id => {
    if (currentEditFile.hasOwnProperty(id)) {
      return '#e29313'
    }
  }

  const handleDeletFile = (id) => {
    deleteFile(id)
  }

  return (
    <div className={`container-list-files ${isListFileOpen && 'active'}`}>
      <div className="close-list" onClick={() => listFilesToggle()}>
        <i className="far fa-times-circle"></i>
      </div>
      <div className="list-files-content">
        <h3>Arquivos salvos</h3>
        <ul className='list-files'>
          {Object.keys(files).map(file => (
            <li key={files[file].id}>
              <span style={{ color: colorFileSelected(files[file].id) }}>{files[file].nameFile}</span>
              <div className="actions">
                <i className="fas fa-edit" onClick={() => handleEditFile(files[file].id)}></i>
                <i className="fas fa-trash" onClick={() => handleDeletFile(files[file].id)}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ListFiles
