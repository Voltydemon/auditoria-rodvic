# Inyección SQL — SeguroTotal

## 1. Descripción del hallazgo

La vulnerabilidad de Inyección SQL fue identificada en el módulo **SQL Injection** de DVWA. Esta falla permite manipular la consulta que la aplicación realiza a la base de datos mediante el ingreso de texto malicioso en un campo controlado por el usuario.

En el contexto de SeguroTotal, una vulnerabilidad de este tipo podría permitir la exposición de información relacionada con clientes, pólizas, contratos, datos patrimoniales y antecedentes asociados a seguros generales.

## 2. Evidencia del ataque

**Payload utilizado:**

```sql
' OR '1'='1
```

**Resultado observado:**  
La aplicación devolvió múltiples registros de usuarios, demostrando que el campo vulnerable permitió modificar la lógica de la consulta SQL.

![Evidencia SQL Injection](img_rodvic/sqli_rodvic.png)

## 3. Explicación técnica

La vulnerabilidad ocurre porque la aplicación recibe la entrada del usuario y la concatena directamente dentro de una consulta SQL. Al ingresar el payload `' OR '1'='1`, la comilla inicial cierra la cadena esperada por la consulta, y la condición `OR '1'='1'` fuerza que la evaluación sea verdadera para todos los registros.

Una consulta vulnerable podría quedar conceptualmente así:

```sql
SELECT first_name, surname FROM users WHERE user_id = '' OR '1'='1';
```

Como `'1'='1'` siempre es verdadero, la base de datos devuelve todos los registros que coinciden con esa condición. En un portal real de SeguroTotal, esto podría traducirse en acceso no autorizado a datos de clientes, pólizas y antecedentes patrimoniales.