import { Fragment } from 'react'
const rows = ['Alta', 'Media', 'Baja', 'Mínima']
const columns = ['Bajo', 'Medio', 'Alto', 'Crítico']

const findings = [
  {
    title: 'SQL Injection',
    probability: 'Alta',
    impact: 'Alto',
  },
  {
    title: 'XSS Reflected',
    probability: 'Media',
    impact: 'Alto',
  },
  {
    title: 'Command Injection',
    probability: 'Alta',
    impact: 'Crítico',
  },
]

function riskClass(row, column) {
  const score = (rows.length - rows.indexOf(row)) * (columns.indexOf(column) + 1)

  if (score >= 12) return 'risk-critical'
  if (score >= 8) return 'risk-high'
  if (score >= 4) return 'risk-medium'
  return 'risk-low'
}

function RiskHeatmap() {
  return (
    <section className="heatmap-card" aria-labelledby="heatmap-title">
      <h3 id="heatmap-title">Mapa de calor visual</h3>
      <p>
        Ubicación de los hallazgos según probabilidad e impacto para el portal de clientes de SeguroTotal.
      </p>

      <div className="heatmap" role="table" aria-label="Matriz de riesgo">
        <div className="heatmap-header">Prob. / Impacto</div>
        {columns.map((column) => (
          <div className="heatmap-header" key={column}>
            {column}
          </div>
        ))}

        {rows.map((row) => (
          <Fragment key={row}>
            <div className="heatmap-row-label">{row}</div>
            {columns.map((column) => {
              const cellFindings = findings.filter(
                (finding) => finding.probability === row && finding.impact === column,
              )

              return (
                <div className={`heatmap-cell ${riskClass(row, column)}`} key={`${row}-${column}`}>
                  {cellFindings.map((finding) => (
                    <span className="finding-tag" key={finding.title}>
                      {finding.title}
                    </span>
                  ))}
                </div>
              )
            })}
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default RiskHeatmap
