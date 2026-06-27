# Matriz de Riesgo — SeguroTotal

## 1. Criterio utilizado

La matriz de riesgo se construye combinando dos factores:

- **Probabilidad:** posibilidad de que la vulnerabilidad sea explotada.
- **Impacto:** daño que produciría sobre SeguroTotal si fuera explotada.

La evaluación considera el puntaje CVSS, la facilidad de explotación y el contexto de negocio de una empresa de seguros generales.

## 2. Escala de probabilidad

| Nivel | Descripción |
|---|---|
| Mínima | Requiere muchas condiciones especiales o acceso difícil. |
| Baja | Requiere condiciones específicas o conocimientos avanzados. |
| Media | Puede explotarse con interacción o condiciones moderadas. |
| Alta | Es fácil de explotar, remotamente y con bajo esfuerzo. |

## 3. Escala de impacto

| Nivel | Descripción |
|---|---|
| Bajo | Afecta información no sensible o funciones secundarias. |
| Medio | Afecta parcialmente usuarios o procesos internos. |
| Alto | Expone datos sensibles o altera servicios relevantes. |
| Crítico | Compromete servidor, datos críticos o continuidad operacional. |

## 4. Evaluación de riesgos

| Vulnerabilidad | Probabilidad | Impacto | CVSS | Severidad CVSS | Nivel de riesgo |
|---|---|---|---:|---|---|
| SQL Injection | Alta | Alto | 8.2 | High | Crítico |
| XSS Reflected | Media | Alto | 6.1 | Medium | Alto |
| Command Injection | Alta | Crítico | 10.0 | Critical | Crítico |

## 5. Mapa de calor

| Probabilidad \ Impacto | Bajo | Medio | Alto | Crítico |
|---|---|---|---|---|
| Alta | Medio | Alto | **Crítico: SQL Injection** | **Crítico: Command Injection** |
| Media | Bajo | Medio | **Alto: XSS Reflected** | Crítico |
| Baja | Bajo | Bajo | Medio | Alto |
| Mínima | Bajo | Bajo | Medio | Medio |

## 6. Priorización de tratamiento

### Prioridad 1 — Command Injection

Debe corregirse de inmediato porque permite ejecutar comandos en el servidor. En SeguroTotal, esto podría comprometer la plataforma completa, las pólizas, los datos patrimoniales y la disponibilidad del portal.

### Prioridad 2 — SQL Injection

Debe corregirse en segundo lugar, también con urgencia. Aunque el CVSS es menor que Command Injection, su impacto sobre la confidencialidad es muy alto porque puede exponer bases de datos con clientes y pólizas.

### Prioridad 3 — XSS Reflected

Debe corregirse después de las dos anteriores, pero sigue siendo relevante. Puede facilitar robo de sesión, suplantación o engaño a clientes que acceden al portal.

## 7. Interpretación para SeguroTotal

La matriz muestra que SeguroTotal debe concentrar sus recursos iniciales en los riesgos que afectan directamente el servidor y la base de datos. Estos activos sostienen el funcionamiento del negocio y contienen información sensible del cliente.

El orden recomendado de remediación es:

1. Bloquear ejecución de comandos.
2. Implementar consultas parametrizadas.
3. Escapar salidas y aplicar CSP.
4. Fortalecer monitoreo, registros y respuesta a incidentes.
5. Probar respaldos y recuperación.

## 8. Conclusión

La matriz de riesgo confirma que las vulnerabilidades técnicas tienen impacto directo en el negocio. En una empresa de seguros generales, la pérdida de confidencialidad, integridad o disponibilidad puede afectar la continuidad operacional y la confianza de los clientes.
