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

