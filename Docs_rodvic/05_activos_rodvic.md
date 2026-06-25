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

## 4. Análisis según la industria

En una empresa de seguros generales, el impacto de una vulnerabilidad no se limita a la exposición de datos técnicos. La información contenida en las pólizas puede revelar patrimonio, bienes asegurados, direcciones, condiciones contractuales y antecedentes de clientes.

Por esta razón, una vulnerabilidad que en otro rubro podría considerarse moderada, en SeguroTotal puede elevarse a riesgo alto o crítico debido a la sensibilidad de los datos custodiados.

## 5. Activos prioritarios

Los activos que requieren mayor prioridad de protección son:

1. **Servidor web:** porque si es comprometido puede afectar todo el portal.
2. **Base de datos de pólizas:** porque contiene el núcleo del negocio.
3. **Datos patrimoniales:** porque son altamente sensibles.
4. **Credenciales y sesiones:** porque permiten acceso a cuentas de clientes.
5. **Respaldos:** porque sostienen la recuperación ante incidentes.

## 6. Conclusión

La protección de los activos de SeguroTotal debe orientarse a evitar accesos no autorizados, manipulación de información contractual e interrupción del portal. La priorización debe considerar tanto el puntaje técnico de cada vulnerabilidad como el impacto real en el negocio de seguros generales.
