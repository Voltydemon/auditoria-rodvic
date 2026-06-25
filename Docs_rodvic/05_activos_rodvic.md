 Activos de Información — SeguroTotal

## 1. Contexto

SeguroTotal es una empresa ficticia de seguros generales. Su portal de clientes custodia información sensible vinculada a pólizas, datos patrimoniales, antecedentes personales y documentación contractual. Por este motivo, sus activos de información deben protegerse considerando confidencialidad, integridad y disponibilidad.

## 2. Activos críticos identificados

| Activo | Descripción | Confidencialidad | Integridad | Disponibilidad |
|---|---|---:|---:|---:|
| Base de datos de clientes | Registros de clientes, credenciales, datos personales y contacto. | Alta | Alta | Alta |
| Base de datos de pólizas | Información contractual, coberturas, vigencias y condiciones de seguros. | Alta | Alta | Alta |
| Datos patrimoniales | Información sobre bienes asegurados, valores, propiedades o vehículos. | Crítica | Alta | Media |
| Portal web de clientes | Plataforma usada para consultar pólizas y realizar gestiones. | Alta | Alta | Crítica |
| Servidor web | Infraestructura que ejecuta la aplicación del portal. | Alta | Alta | Crítica |
| Credenciales y sesiones | Usuarios, contraseñas, tokens y cookies de sesión. | Crítica | Alta | Alta |
| Respaldos | Copias de seguridad de datos y configuraciones. | Alta | Alta | Crítica |
| Logs de auditoría | Registros de acceso, errores, eventos y acciones sospechosas. | Media | Alta | Media |
| Repositorio de código | Código fuente del portal y configuraciones de despliegue. | Alta | Alta | Media |

## 3. Riesgos asociados por activo

| Activo | Riesgo principal | Vulnerabilidad relacionada |
|---|---|---|
| Base de datos de clientes | Exposición masiva de registros | SQL Injection |
| Base de datos de pólizas | Consulta o modificación no autorizada de pólizas | SQL Injection |
| Datos patrimoniales | Filtración de información sensible del cliente | SQL Injection / Command Injection |
| Portal web | Manipulación de contenido mostrado al usuario | XSS Reflected |
| Servidor web | Ejecución de comandos y control del sistema | Command Injection |
| Credenciales y sesiones | Robo o secuestro de sesión | XSS Reflected |
| Respaldos | Pérdida o restauración incompleta tras incidente | Command Injection |
| Logs de auditoría | Falta de trazabilidad ante ataque | Todas |
| Repositorio de código | Publicación de código inseguro | Todas |