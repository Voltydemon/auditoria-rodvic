# Bitácora de Uso de Inteligencia Artificial — Auditoría SeguroTotal

## 1. Identificación

**Estudiante:** Vicente Andrés Rodríguez Quezada  
**Proyecto:** auditoria_rodvic  
**Empresa auditada:** SeguroTotal  
**Herramienta utilizada:** ChatGPT  
**Objetivo del uso:** Apoyar la organización del informe, redacción de Markdown, análisis de vulnerabilidades, interpretación CVSS y adaptación del riesgo al rubro de seguros generales.

## 2. Uso de IA por sección

| Sección | Prompt utilizado | Resultado aceptado | Correcciones realizadas |
|---|---|---|---|
| Resumen ejecutivo | “Ayúdame a redactar el resumen de una auditoría web para SeguroTotal, empresa de seguros generales, usando DVWA y los ataques SQLi, XSS y Command Injection.” | Estructura general, objetivo, alcance y resumen de hallazgos. | Se ajustó el nombre del proyecto a `auditoria_rodvic` y la empresa a SeguroTotal. |
| SQL Injection | “Genera el Markdown de SQL Injection para SeguroTotal usando el payload `' OR '1'='1`, CVSS 8.2 High y medidas de prevención.” | Explicación técnica, impacto y controles. | Se incorporó la evidencia propia y el vector CVSS calculado. |
| XSS Reflected | “Explica XSS Reflected para un portal de clientes de seguros, usando el payload `<script>alert('XSS')</script>` y CVSS 6.1 Medium.” | Explicación de ejecución de JavaScript y controles CSP. | Se adaptó el impacto a robo de sesión y suplantación de clientes. |
| Command Injection | “Redacta el análisis de Command Injection con el payload `127.0.0.1; cat /etc/passwd`, CVSS 10.0 Critical, orientado a SeguroTotal.” | Explicación del uso del `;`, impacto en servidor y plan de mitigación. | Se ajustó la prioridad como crítica e inmediata. |
| Activos | “Identifica activos de información críticos para SeguroTotal, considerando pólizas y datos patrimoniales.” | Tabla de activos y riesgos por industria. | Se priorizaron servidor, base de datos, pólizas, sesiones y respaldos. |
| Matriz de riesgo | “Construye una matriz probabilidad por impacto para SQL Injection, XSS y Command Injection en SeguroTotal.” | Matriz de calor y priorización. | Se ordenó la remediación según impacto y CVSS. |
| Controles | “Propón controles de prevención y mitigación para SQLi, XSS y Command Injection en una empresa de seguros.” | Medidas técnicas y políticas internas. | Se separó prevención de mitigación. |
| Recuperación | “Crea un plan de recuperación ante incidentes para SeguroTotal considerando filtración de datos y compromiso del servidor.” | Fases de detección, contención, erradicación y recuperación. | Se agregaron RTO, RPO y pruebas posteriores. |

## 3. Prompts principales utilizados

### Prompt 1

```text
Necesito completar una auditoría web en Markdown para la empresa ficticia SeguroTotal, rubro seguros generales. El portal custodia pólizas y datos patrimoniales. Debo analizar SQL Injection, XSS Reflected y Command Injection en DVWA, incluyendo evidencia, explicación técnica, CVSS, prevención, mitigación y recuperación.
```

### Prompt 2

```text
Ayúdame a adaptar el impacto de SQL Injection al rubro de seguros generales, considerando exposición de pólizas, datos patrimoniales y clientes.
```

### Prompt 3

```text
Con estos vectores CVSS, redacta la justificación técnica: SQL Injection 8.2 High, XSS Reflected 6.1 Medium y Command Injection 10.0 Critical.
```

### Prompt 4

```text
Crea una matriz de riesgo probabilidad por impacto para SeguroTotal y prioriza la remediación de los tres hallazgos.
```

### Prompt 5

```text
Genera controles de prevención, mitigación y recuperación para una auditoría web de SeguroTotal, evitando respuestas genéricas y relacionando cada control con el negocio de seguros.
```

## 4. Qué se aceptó de la IA

Se aceptó la estructura general del informe, tablas de análisis, redacción base de los riesgos, explicación técnica de vulnerabilidades y propuestas de controles. También se aceptó el apoyo para ordenar los archivos con el sufijo `rodvic`.

## 5. Qué se corrigió o verificó

Se verificaron manualmente los siguientes aspectos:

- Nombre del proyecto: `auditoria_rodvic`.
- Nombre de carpeta: `docs_rodvic`.
- Empresa asignada: SeguroTotal.
- Rubro: seguros generales.
- Datos protegidos: pólizas y datos patrimoniales.
- Payloads ejecutados en DVWA.
- Capturas de evidencia.
- Puntajes CVSS calculados en la calculadora oficial.
- Coherencia entre vulnerabilidad técnica e impacto de negocio.

## 6. Reflexión final

El uso de IA permitió acelerar la redacción y organización del informe, pero el análisis no se copió de forma automática. Fue necesario entregar contexto específico, como la empresa SeguroTotal, el tipo de datos protegidos, los payloads usados y los puntajes CVSS calculados.

La principal lección es que una herramienta de IA puede apoyar el desarrollo del informe, pero la responsabilidad técnica sigue siendo del auditor. Si el prompt es genérico, la respuesta también lo será. En cambio, al indicar empresa, rubro, vulnerabilidad, evidencia y defensa esperada, el resultado es más útil y se relaciona mejor con el riesgo real del negocio.

## 7. Declaración de uso responsable

La IA se utilizó como apoyo para redactar y ordenar el informe. Las pruebas fueron realizadas en un ambiente controlado DVWA, autorizado para la evaluación. No se realizaron ataques contra sistemas externos ni no autorizados.