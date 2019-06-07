---
title: CHECKLIST Y ESTANDARES
---
# CHECKLIST Y ESTANDARES

Con relación al control de calidad para la parte Backend de un proyecto, se deben de implementar estándares y ciertas características dependiendo del tipo de proyecto.
El primero de los estándares a tomar en cuenta por el lado de Python es PEP-8, por otro lado en cuanto a Nodejs hay más opciones como lo son. AirBnB Standard o Javascript Standard.
Una buena práctica de desarrollo es la implementación de Unit Testing y TDD; algunas herramientas que se pueden utilizar para este propósito son:
## Checklist de control de calidad para Backend
Python
    PyUnit 
NodeJS
    Mocha
    Expect
    Jest
## Checklist de control de calidad para Frontend.
Comprobar junto con checklist en línea para verificar que el sitio cumpla con los requisitos necesarios https://frontendchecklist.io Calificación mínima para aprobación: C, consultar PDF para validar las configuraciones necesarias para alcanzar esta calificación. Calificación máxima: A, esto dependerá del proyecto.
* Utilizar linters de javascript
    * eslint
    * jslint

* Implementar unit/tdd testing
    * Mocha
    * Chai
    * Mockery
    * Jest
    * Karma


* Implementar browser testing /e2e
    *	Nightwatch
    *	TestCafe
    *	Cypress
    *	Laravel Dusk

*	Breakpoints
    *	Los de común verificación
        *	1200px
        *	1024px
        *	992px
        *	768px
        *	580px
        *	440px
        *	350px


*	Para una verificación más completa podemos utilizar:
    *	Los brindados por las dev tools de Safari: https://support.apple.com/kb/PH26266?locale=en_US
    *	Este listado de breakpoints más comunes que se adapten a la necesidad: https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints

*	Cross Browser Compatibility
    *	Las versiones mínimas para verificar compatibilidad son:
        *	IE 11+
        *	Edge 13+
        *	Firefox 55+
        *	Safari 10+
        *	Chrome 57+
        
*	Utilizar https://www.lambdatest.com
    *	Optimización de imágenes
    *	Hacer una verificación que el peso de las imágenes no exceda los 500 KB, ni tampoco midan más de 2000px ya sea en alto o ancho.
    *	Verificar que las imágenes cuadradas que no necesitan transparencia sean proporcionadas en formato JPG.
    *	Verificar que las imágenes que necesiten transparencia sean proporcionadas en formato PNG o en casos especiales como iconos o logos en SVG.

## Checklist para creación de base de datos

*	Utilizar snake_case para la creación de nombres de colecciones y campos
*	Nombres de colecciones y campos en inglés
*	Para los identificadores de colección siempre usar la estructura item_id para el nombre del campo, ej: user_id, product_id, etc.
*	Siempre contar con una replica de base de datos para poder mantener los datos resguardados.

## Estándar API 

*	Definir estructura de API utilizando RAML
*	Utilizar parte del estándar JSON API para el manejo de la estructura de las respuestas json de cada endpoint. Validar junto al programador frontend o cada API generada.


