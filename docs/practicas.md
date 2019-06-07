---
title: BUENAS PRÁCTICAS
---
# BUENAS PRÁCTICAS 
## Lineamientos de escritura
*	Las variables, clases, funciones, ids, y comentarios deben estar escritos en el idioma inglés, al igual que los commits a repositorios, carpetas y archivos.
*	No usar caracteres especiales ni espacios al momento de nombrar estos elementos.
## Documentación
La documentación del código debe hacerse utilizando comentarios siguiendo estándares como los  que es el que recomienda PEP 287 que es el reStructuredText (reST)
Se utiliza de forma predeterminada en JetBrains PyCharm (escriba comillas triples después de definir un método y presione Intro). También se usa por defecto como formato de salida en Pyment.
Ejemplos de documentación en Python.
"""
This is a reST style.
:param param1: this is a first param
:param param2: this is a second param
:returns: this is a description of what is returned
:raises keyError: raises an exception
"""

Ejemplo simple de Documentación en Python.


    
    def square_root(n):

        """Calculate the square root of a number.
        Args:
            n: the number to get the square root of.
        Returns:
            the square root of n.
        Raises:
            TypeError: if n is not a number.
            ValueError: if n is negative.
        """
    Pass
 
