import React from 'react'
import './styles.css'

const ModalInput = ({ modalToggle, newNameFile, filesLength }) => {
  return (
    <div className='bg-modal'>
      <div className="modal-content">
        {!!filesLength && <div className="close-modal" onClick={() => modalToggle(false)}>
          <i className="far fa-times-circle" />
        </div>}
        <div className="title-modal">
          <h3>Novo arquivo Markdown</h3>
        </div>
        <form onSubmit={newNameFile}>
          <label htmlFor="">Nome do arquivo</label>
          <input type="text" name="nameFile" id="" />
          <button className='btn-criar'>Criar</button>
        </form>
      </div>
    </div>
  )
}

export default ModalInput
