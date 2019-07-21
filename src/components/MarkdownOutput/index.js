import React from 'react'
import './styles.css'

const MarkdownOutput = ({ textMarkdownOut }) => {
  return (
    <div className='markdown-output-container'>
      <pre dangerouslySetInnerHTML={{ ...textMarkdownOut() }}>
      </pre>
    </div>
  )
}

export default MarkdownOutput
