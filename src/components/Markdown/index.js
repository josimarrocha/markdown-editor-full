import React from 'react'
import './styles.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'

const MarkdownEditor = ({ refTextarea }) => {
  return (
    <div className='markdown-editor'>
      <textarea ref={refTextarea} />
    </div>
  )
}

export default MarkdownEditor
