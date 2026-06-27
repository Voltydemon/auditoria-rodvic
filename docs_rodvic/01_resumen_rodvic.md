# Resumen Ejecutivo — Auditoría Web SeguroTotal

## 1. Identificación de la auditoría

**Auditor:** Vicente Andrés Rodríguez Quezada  
**Proyecto:** auditoria_rodvic  
**Empresa auditada:** SeguroTotal  
**Código asignado:** E21  
**Rubro:** Seguros generales  
**Sistema evaluado:** Portal de clientes representado en ambiente controlado DVWA  
**Nivel de seguridad del laboratorio:** Low  

## 2. Contexto de la empresa

SeguroTotal es una empresa ficticia del rubro de seguros generales. Su portal de clientes permite consultar y gestionar información asociada a pólizas, antecedentes personales, datos patrimoniales y documentación vinculada a la relación contractual entre la empresa y sus asegurados.

En este contexto, la seguridad del portal es crítica, ya que una falla técnica no solo afecta a la aplicación web, sino también la confianza de los clientes, la continuidad operacional y la protección de información sensible relacionada con bienes, contratos y patrimonio.

## 3. Objetivo de la auditoría

El objetivo de esta auditoría es evaluar tres vulnerabilidades web en un ambiente controlado, medir su gravedad mediante CVSS 3.1, analizar el impacto que tendrían en el negocio de SeguroTotal y proponer medidas de prevención, mitigación y recuperación.Las vulnerabilidades evaluadas fueron:

| Vulnerabilidad | Módulo DVWA | Payload utilizado | Resultado principal |
|---|---|---|---|
| Inyección SQL | SQL Injection | `' OR '1'='1` | Exposición de registros de usuarios |
| XSS Reflected | XSS (Reflected) | `<script>alert('XSS')</script>` | Ejecución de código JavaScript en el navegador |
| Inyección de comandos | Command Injection | `127.0.0.1; cat /etc/passwd` | Lectura de archivo interno del servidor |

## 4. Alcance de la evaluación

La evaluación se realizó únicamente sobre DVWA, una aplicación vulnerable diseñada con fines educativos. No se realizaron pruebas sobre sistemas reales, externos o no autorizados.

El alcance considera:

- Identificación técnica de vulnerabilidades.
- Evidencia mediante capturas de pantalla.
- Cálculo de gravedad con CVSS 3.1.
- Análisis de impacto para una empresa de seguros generales.
- Definición de activos críticos.
- Construcción de matriz de riesgo.
- Propuestas de prevención, mitigación y recuperación.

## 5. Resultados generales

Los resultados muestran que las vulnerabilidades evaluadas representan riesgos importantes para SeguroTotal, especialmente por el tipo de información que custodia el portal.

| Vulnerabilidad | CVSS 3.1 | Severidad | Riesgo de negocio |
|---|---:|---|---|
| Inyección SQL | 8.2 | High | Crítico |
| XSS Reflected | 6.1 | Medium | Alto |
| Inyección de comandos | 10.0 | Critical | Crítico |

La vulnerabilidad más grave es la inyección de comandos, ya que permite ejecutar instrucciones en el servidor y podría comprometer completamente la plataforma. En segundo lugar se ubica la inyección SQL, por su capacidad de exponer información de clientes y pólizas. Finalmente, XSS Reflected se considera de riesgo alto para el negocio, ya que puede facilitar robo de sesión, suplantación o engaño a usuarios.

## 6. Conclusión ejecutiva

SeguroTotal debe priorizar la corrección de las fallas que afectan directamente la confidencialidad, integridad y disponibilidad de sus sistemas. Las medidas más urgentes son eliminar la ejecución de comandos con entrada del usuario, implementar consultas parametrizadas, validar entradas, escapar salidas HTML y fortalecer el monitoreo del portal.

La protección del portal no debe verse solo como una corrección técnica, sino como una medida necesaria para resguardar pólizas, datos patrimoniales, continuidad del servicio y confianza de los clientes.