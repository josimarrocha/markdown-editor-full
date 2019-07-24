import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import { v4 } from 'uuid'
import { savingChange, modalToggle, menuToggle, listFilesToggle } from '../../reducers/ui/actionsCreators'
import { newFile, editFile, deleteFile } from '../../reducers/files/actionsCreators'
import Modalinput from '../../components/ModalInput'
import Markdown from '../../components/Markdown'
import MarkdownOutput from '../../components/MarkdownOutput'
import ListFiles from '../../components/ListFiles'
import './styles.css'
import 'highlight.js/styles/dracula.css'
import('highlight.js').then(hljs => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.highlight(lang, code)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

const Home = ({
  deleteFile,
  savingChange,
  modalToggle,
  ui,
  newFile,
  menuToggle,
  filesLength,
  listFilesToggle,
  editFile,
  files
}) => {
  const [textMarkdownOut, setTextMarkdown] = useState('')
  const [, setTimer] = useState(0)
  const [temp, setIsSaving] = useState(false)
  const [file, setFile] = useState({})
  const [load, setLoad] = useState(true)

  useEffect(() => {
    if (filesLength === 0) {
      modalToggle(true)
    } else {
      if (load) {
        const ids = Object.keys(files)
        setFile({ id: ids[ids.length - 1], text: files[ids[ids.length - 1]].text })
        setTextMarkdown(files[ids[ids.length - 1]].text)
        modalToggle(false)
        setLoad(false)
      }
    }
    interval()
  }, [filesLength, textMarkdownOut])

  const onChangeCodeMirror = (e) => {
    e.on('change', (e) => {
      setFile({ ...file, text: e.getValue() })
      editFile(file.id, e.getValue())
      setIsSaving(true)
      setTextMarkdown(e.getValue())
      savingChange(true, e.getValue().length)
    })
  }

  const newNameFile = (e) => {
    e.preventDefault()
    const { nameFile } = e.target
    if (nameFile.value) {
      let id = v4()
      setFile({ id, text: '' })
      newFile({
        id,
        nameFile: nameFile.value,
        text: ''
      })
      setTextMarkdown('')
      menuToggle(false)
      modalToggle(false)
    }
  }

  const handleSaving = () => {
    clearInterval(setTimer(0))
    if (temp) {
      savingChange(false)
    }
  }
  const interval = () => setTimer(setTimeout(handleSaving, 1000))

  const markdownToHtml = () => ({ __html: marked(textMarkdownOut) })

  const renderMarkdown = (file) => {
    if (file.hasOwnProperty('id')) {
      return (
        <>
          {ui.containersView.markIn && <Markdown
            file={file}
            listFilesToggle={listFilesToggle}
            onChangeCodeMirror={onChangeCodeMirror} />}

        </>
      )
    }
  }
  return (
    <div className='markdown-container'>
      <ListFiles
        isListFileOpen={ui.isListFileOpen}
        listFilesToggle={listFilesToggle}
        files={files}
        setFile={setFile}
        setTextMarkdown={setTextMarkdown}
        deleteFile={deleteFile}
      />
      {ui.isModalOpen &&
        <Modalinput
          newNameFile={newNameFile}
          filesLength={filesLength}
          modalToggle={modalToggle} />}
      {renderMarkdown(file)}
      {ui.containersView.markOut && <MarkdownOutput
        textMarkdownOut={markdownToHtml}
      />}
    </div>
  )
}

const mapStateToProps = state => ({
  ui: state.ui,
  filesLength: Object.keys(state.files).length,
  files: state.files
})

export default connect(mapStateToProps,
  {
    deleteFile,
    savingChange,
    modalToggle,
    newFile,
    menuToggle,
    listFilesToggle,
    editFile
  })(Home)
