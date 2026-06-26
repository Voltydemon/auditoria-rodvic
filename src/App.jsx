import { useMemo, useState } from 'react'
import './App.css'

import Resumen from './components/Resumen.jsx'
import InyeccionSQL from './components/InyeccionSQL.jsx'
import XSS from './components/XSS.jsx'
import Comandos from './components/Comandos.jsx'
import Activos from './components/Activos.jsx'
import Matriz from './components/Matriz.jsx'
import Controles from './components/Controles.jsx'
import Recuperacion from './components/Recuperacion.jsx'
import Prompts from './components/Prompts.jsx'

const secciones = [
  { id: 'resumen', label: 'Resumen', badge: '01', component: <Resumen /> },
  { id: 'sqli', label: 'SQL Injection', badge: '02', component: <InyeccionSQL /> },
  { id: 'xss', label: 'XSS Reflected', badge: '03', component: <XSS /> },
  { id: 'comandos', label: 'Command Injection', badge: '04', component: <Comandos /> },
  { id: 'activos', label: 'Activos', badge: '05', component: <Activos /> },
  { id: 'matriz', label: 'Matriz de Riesgo', badge: '06', component: <Matriz /> },
  { id: 'controles', label: 'Controles', badge: '07', component: <Controles /> },
  { id: 'recuperacion', label: 'Recuperación', badge: '08', component: <Recuperacion /> },
  { id: 'prompts', label: 'Bitácora IA', badge: '09', component: <Prompts /> },
]

function App() {
  const [activa, setActiva] = useState('resumen')
  const seccionActual = useMemo(
    () => secciones.find((seccion) => seccion.id === activa) ?? secciones[0],
    [activa],
  )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-card">
          <div className="brand-mark">ST</div>
          <div>
            <p className="eyebrow">Auditoría Web</p>
            <h1>SeguroTotal</h1>
            <span>Vicente Rodríguez</span>
          </div>
        </div>

        <nav className="section-nav" aria-label="Secciones del informe">
          {secciones.map((seccion) => (
            <button
              key={seccion.id}
              type="button"
              className={activa === seccion.id ? 'nav-button active' : 'nav-button'}
              onClick={() => setActiva(seccion.id)}
            >
              <span>{seccion.badge}</span>
              {seccion.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <header className="hero">
          <p className="eyebrow">TI3034 · Evaluación Sumativa N°3</p>
          <h2>Auditoría de seguridad web presentada como aplicación React</h2>
          <p>
            Informe técnico sobre vulnerabilidades explotadas en DVWA, adaptado al
            contexto de negocio de SeguroTotal, empresa ficticia de seguros generales.
          </p>

          <div className="hero-grid" aria-label="Datos principales de la auditoría">
            <div>
              <span>Empresa</span>
              <strong>SeguroTotal</strong>
            </div>
            <div>
              <span>Rubro</span>
              <strong>Seguros generales</strong>
            </div>
            <div>
              <span>Proyecto</span>
              <strong>auditoria_rodvic</strong>
            </div>
            <div>
              <span>Entrega</span>
              <strong>React + Markdown</strong>
            </div>
          </div>
        </header>

        <section className="panel" aria-labelledby="section-title">
          <div className="panel-titlebar">
            <span>{seccionActual.badge}</span>
            <h3 id="section-title">{seccionActual.label}</h3>
          </div>
          {seccionActual.component}
        </section>
      </main>
    </div>
  )
}

export default App
