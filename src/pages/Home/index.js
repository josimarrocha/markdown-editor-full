import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import cm from 'codemirror'
import marked from 'marked'
import { savingChange } from '../../reducers/ui/actionsCreators'
import Markdown from '../../components/Markdown'
import MarkdownOutput from '../../components/MarkdownOutput'
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

const Home = ({ changeMarkdown, savingChange }) => {
  const textareaRef = React.createRef()
  const [textMarkdownOut, setTextMarkdown] = useState('')
  const [temp, setIsSaving] = useState(false)

  useEffect(() => {
    cm.fromTextArea(textareaRef.current, {
      lineNumbers: true,
      mode: 'markdown',
      autofocus: true,
      lineWrapping: true,
    }).on('change', (e) => {
      setIsSaving(true)
      setTextMarkdown(e.getValue())
      savingChange(true, e.getValue().length)
    })
  }, [])
  const handleSaving = () => {
    if (temp) {
      savingChange(false)
    }
  }
  setTimeout(handleSaving, 1000)

  const markdownToHtml = () => {
    return { __html: marked(textMarkdownOut) }
  }

  return (
    <div className='markdown-container'>
      <Markdown
        onChange={changeMarkdown}
        refTextarea={textareaRef} />
      <MarkdownOutput
        textMarkdownOut={markdownToHtml}
      />
    </div>
  )
}

export default connect(null, { savingChange })(Home)
