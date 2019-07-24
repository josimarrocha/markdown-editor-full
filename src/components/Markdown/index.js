import React, { useEffect } from 'react'
import cm from 'codemirror'
import './styles.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'

const MarkdownEditor = ({ onChangeCodeMirror, file }) => {
  const textareaRef = React.createRef()

  useEffect(() => {
    cm.fromTextArea(textareaRef.current, {
      lineNumbers: true,
      mode: 'markdown',
      autofocus: true,
      lineWrapping: true,
    })
      .on('focus', (e) => {
        onChangeCodeMirror(e)
      })
  }, [file.id])
  return (
    <div className='markdown-editor'>
      <textarea
        ref={textareaRef}
        value={file.text}
        onChange={value => value}
      />
    </div>
  )
}

export default MarkdownEditor
