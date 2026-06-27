# Plan de Recuperación y Mejora Tecnológica — SeguroTotal

## 1. Objetivo

El objetivo de este plan es definir acciones de recuperación ante un incidente de seguridad que afecte el portal de clientes de SeguroTotal. El plan considera escenarios asociados a SQL Injection, XSS Reflected y Command Injection.

## 2. Escenarios de incidente

| Escenario | Descripción | Impacto esperado |
|---|---|---|
| Filtración de datos | Exposición de clientes, pólizas o datos patrimoniales por SQL Injection. | Alto / Crítico |
| Robo de sesión | Cliente engañado mediante XSS y acceso no autorizado a su cuenta. | Alto |
| Compromiso del servidor | Ejecución de comandos y acceso a archivos internos. | Crítico |
| Interrupción del portal | Caída total o parcial del servicio. | Crítico |
| Alteración de información | Modificación no autorizada de datos o configuraciones. | Alto / Crítico |

## 3. Fases de recuperación

### Fase 1 — Detección

- Revisar alertas del WAF, logs de aplicación y logs del sistema operativo.
- Identificar payloads sospechosos.
- Confirmar si hubo acceso no autorizado.
- Determinar sistemas afectados.
- Clasificar severidad del incidente.

### Fase 2 — Contención

- Bloquear temporalmente el endpoint vulnerable.
- Aislar el servidor comprometido si existe sospecha de command injection.
- Deshabilitar cuentas o sesiones afectadas.
- Cambiar credenciales de servicios críticos.
- Activar reglas de bloqueo en WAF.

### Fase 3 — Erradicación

- Corregir el código vulnerable.
- Eliminar scripts, archivos o procesos no autorizados.
- Aplicar parches al sistema operativo y dependencias.
- Revisar permisos de archivos y usuarios.
- Confirmar que no existan puertas traseras.

### Fase 4 — Recuperación

- Restaurar desde respaldos limpios si corresponde.
- Validar integridad de bases de datos de clientes y pólizas.
- Probar el portal en ambiente seguro antes de habilitarlo.
- Reactivar servicios gradualmente.
- Monitorear actividad posterior a la recuperación.

### Fase 5 — Comunicación y cierre

- Informar internamente a las áreas responsables.
- Notificar a clientes afectados si corresponde.
- Documentar causas, evidencia y acciones tomadas.
- Actualizar políticas de seguridad.
- Realizar una revisión posterior al incidente.

## 4. Objetivos de recuperación

| Elemento | Objetivo propuesto |
|---|---|
| RTO portal web | Recuperar servicio crítico en menos de 8 horas. |
| RPO base de datos | Pérdida máxima tolerable de 24 horas de información. |
| Respaldos | Copias diarias cifradas y prueba mensual de restauración. |
| Monitoreo | Alertas en tiempo cercano a real para eventos críticos. |
| Comunicación | Primer reporte interno dentro de las primeras 2 horas. |

## 5. Mejora tecnológica propuesta

SeguroTotal debe implementar mejoras tecnológicas para disminuir la probabilidad de nuevos incidentes:

- Incorporar WAF delante del portal.
- Centralizar logs en una plataforma de monitoreo.
- Implementar análisis de vulnerabilidades periódico.
- Automatizar pruebas de seguridad en el ciclo de desarrollo.
- Usar secretos gestionados de forma segura.
- Separar ambientes de desarrollo, prueba y producción.
- Aplicar hardening al servidor web.
- Implementar MFA para cuentas administrativas.
- Cifrar respaldos y datos sensibles.
- Usar monitoreo de integridad de archivos.

## 6. Plan específico por vulnerabilidad

| Vulnerabilidad | Acción de recuperación |
|---|---|
| SQL Injection | Revisar consultas, corregir parametrización, auditar datos expuestos y rotar credenciales. |
| XSS Reflected | Corregir escape de salida, invalidar sesiones sospechosas y reforzar CSP. |
| Command Injection | Aislar servidor, revisar archivos modificados, restaurar desde imagen limpia si es necesario. |

## 7. Responsables sugeridos

| Rol | Responsabilidad |
|---|---|
| Encargado de seguridad | Coordinar respuesta al incidente. |
| Equipo de desarrollo | Corregir código vulnerable. |
| Infraestructura | Aislar servidores, restaurar respaldos y aplicar parches. |
| Soporte | Gestionar comunicación con usuarios afectados. |
| Administración | Evaluar impacto legal, reputacional y operacional. |

## 8. Pruebas posteriores

Después de aplicar correcciones, se deben ejecutar pruebas de validación:

- Repetir payload SQLi y verificar que no funcione.
- Repetir payload XSS y confirmar que se muestre como texto o sea bloqueado.
- Repetir payload de command injection y confirmar que sea rechazado.
- Revisar logs para confirmar que el intento queda registrado.
- Ejecutar pruebas de regresión del portal.

## 9. Conclusión

El plan de recuperación permite a SeguroTotal actuar de manera ordenada ante incidentes. La empresa debe priorizar la restauración segura del servicio, la protección de clientes, la trazabilidad del incidente y la corrección definitiva de las vulnerabilidades para evitar que se repitan.
