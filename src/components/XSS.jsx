import markdown from '../../docs_rodvic/03_xss_rodvic.md?raw'
import MarkdownView from './MarkdownView.jsx'

function XSS() {
  return <MarkdownView markdown={markdown} />
}

export default XSS
