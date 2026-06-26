import markdown from '../../docs_rodvic/04_comandos_rodvic.md?raw'
import MarkdownView from './MarkdownView.jsx'

function Comandos() {
  return <MarkdownView markdown={markdown} />
}

export default Comandos
