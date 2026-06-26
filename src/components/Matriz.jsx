import markdown from '../../docs_rodvic/06_matriz_rodvic.md?raw'
import MarkdownView from './MarkdownView.jsx'
import RiskHeatmap from './RiskHeatmap.jsx'

function Matriz() {
  return (
    <>
      <MarkdownView markdown={markdown} />
      <RiskHeatmap />
    </>
  )
}

export default Matriz
