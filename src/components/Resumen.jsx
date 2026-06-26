import markdown from '../../docs_rodvic/01_resumen_rodvic.md?raw'
import MarkdownView from './MarkdownView.jsx'

function Resumen() {
  return <MarkdownView markdown={markdown} />
}

export default Resumen
