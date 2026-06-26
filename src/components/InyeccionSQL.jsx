import markdown from '../../docs_rodvic/02_sqli_rodvic.md?raw'
import MarkdownView from './MarkdownView.jsx'

function InyeccionSQL() {
  return <MarkdownView markdown={markdown} />
}

export default InyeccionSQL
