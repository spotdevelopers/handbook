---
title: Seguridad
---
# Seguridad

## Backups 
Estos son algunos escenarios en donde es requerido realizar un backup:
*	En el servidor antes de manipular algo en la terminal.
*	En los repositorios o códigos fuentes.
*	NUNCA HACER CAMBIOS en el editor en vivo de las funciones de Python en lambda.
*	Utilizar herramientas o cronjobs en el servidor que realizan backups automáticos

## Protocolos de Seguridad

## Códigos fuentes en computadoras personales.

- Verificar con el encargado del área o del proyecto que el programador elimine de su computadora personal todo código fuente perteneciente a la empresa, y que todo sea realizado en la nube.
- Remover accesos a cuenta de correo electrónico.
- Remover accesos a cuentas de AWS
- Mientras se encuentra en labor con SPOT todo el código fuente y desarrollo serán en la nube.

## Protocolos de seguridad Web

- Lets Encrypt o uso de SSL porque ahora Google marcará todos los sitios sin protocolos de seguridad.
- Utilizando plataformas Netflify esto es automático
- En plataformas como EC2 (AWS) se deberá configurar Lets Encrypt para las aplicaciones en producción.
- Revisión de todos los puertos en las plataformas, que no sean vulnerables de ataques de hijacking ni tampoco DDoS

## Protocolos de seguridad para plataformas de gestión de Arquitectura en la nube.

- Seguir las recomendaciones de la documentación de IAM de AWS.
- Todos los usuarios deben de tener una jerarquía de acceso a los recursos
- El uso de la cuenta raíz es limitada, los accesos serán solamente por medio de usuarios creados. La cuanta raíz tendrá el acceso por medio de TAF.
