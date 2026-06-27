# Controles de Prevención y Mitigación — SeguroTotal

## 1. Objetivo

Este documento define controles de prevención y mitigación para reducir los riesgos identificados en la auditoría web de SeguroTotal. Las medidas se enfocan en proteger pólizas, datos patrimoniales, credenciales, servidor web y continuidad del portal de clientes.

## 2. Diferencia entre prevención y mitigación

| Tipo de control | Objetivo |
|---|---|
| Prevención | Evitar que la vulnerabilidad exista o pueda ser explotada. |
| Mitigación | Reducir el daño si la vulnerabilidad logra ser explotada. |

## 3. Controles para SQL Injection

### Prevención

- Implementar consultas parametrizadas en todas las operaciones SQL.
- Validar tipos de datos antes de consultar la base.
- Rechazar entradas inesperadas en campos numéricos, formularios y filtros.
- Evitar concatenar texto de usuario dentro de consultas.
- Aplicar revisión de código seguro antes de producción.

### Mitigación

- Usar cuentas de base de datos con permisos mínimos.
- Configurar WAF con reglas contra patrones SQLi.
- Monitorear consultas anómalas.
- Registrar intentos de inyección.
- Separar bases críticas de pólizas y datos patrimoniales.
- Mantener respaldos cifrados y probados.

## 4. Controles para XSS Reflected

### Prevención

- Escapar toda salida HTML.
- Sanitizar entradas de usuario.
- Evitar insertar parámetros de URL directamente en la página.
- Implementar Content Security Policy (CSP).
- Usar frameworks que codifiquen la salida automáticamente.
- Validar formularios del lado cliente y servidor.

### Mitigación

- Configurar cookies con `HttpOnly`, `Secure` y `SameSite`.
- Bloquear scripts inline cuando no sean necesarios.
- Monitorear URLs con etiquetas `<script>` u otros patrones sospechosos.
- Capacitar a usuarios internos sobre enlaces fraudulentos.
- Implementar WAF para bloquear payloads XSS comunes.

## 5. Controles para Command Injection

### Prevención

- No ejecutar comandos del sistema con entrada directa del usuario.
- Reemplazar llamadas a shell por APIs seguras.
- Validar entrada con listas blancas.
- Aceptar únicamente formatos estrictos, por ejemplo una dirección IPv4 válida.
- Bloquear caracteres de encadenamiento como `;`, `&&`, `|` y `$()`.
- Revisar funciones peligrosas como `system`, `exec`, `shell_exec`, `popen`.

### Mitigación

- Ejecutar el servidor web con usuario de bajo privilegio.
- Aislar servicios mediante contenedores o entornos separados.
- Monitorear procesos del sistema operativo.
- Configurar alertas ante lectura de archivos sensibles.
- Restringir acceso a archivos críticos del servidor.
- Mantener copias de seguridad offline.

## 6. Controles generales de seguridad

| Área | Control recomendado |
|---|---|
| Desarrollo seguro | Checklist OWASP antes de publicar cambios. |
| Gestión de accesos | Mínimo privilegio y autenticación fuerte. |
| Monitoreo | Logs centralizados y alertas de eventos sospechosos. |
| Infraestructura | Parches del sistema operativo y dependencias. |
| Continuidad | Respaldos periódicos y pruebas de restauración. |
| Respuesta | Procedimiento formal ante incidentes. |
| Capacitación | Formación básica para desarrolladores y soporte. |

## 7. Política de seguridad propuesta

SeguroTotal debe establecer una política interna de desarrollo seguro con las siguientes reglas mínimas:

1. Ningún dato ingresado por usuarios se considera confiable.
2. Toda consulta SQL debe ser parametrizada.
3. Toda salida HTML debe ser escapada.
4. Ninguna aplicación debe ejecutar comandos del sistema con datos del usuario.
5. Todo cambio relevante debe pasar por revisión de seguridad.
6. Todo incidente debe registrarse, analizarse y corregirse.
7. Los respaldos deben probarse periódicamente.

## 8. Priorización de implementación

| Prioridad | Medida | Riesgo que reduce |
|---|---|---|
| 1 | Eliminar ejecución de comandos con input de usuario | Command Injection |
| 2 | Implementar consultas parametrizadas | SQL Injection |
| 3 | Aplicar escape de salida y CSP | XSS Reflected |
| 4 | Configurar WAF y monitoreo | Todas |
| 5 | Fortalecer respaldos y recuperación | Todas |
| 6 | Capacitar equipo de desarrollo | Todas |

## 9. Conclusión

Los controles propuestos permiten reducir tanto la probabilidad como el impacto de las vulnerabilidades detectadas. Para SeguroTotal, la prioridad debe estar en proteger los datos de clientes, pólizas y patrimonio, junto con asegurar la continuidad del portal de clientes.