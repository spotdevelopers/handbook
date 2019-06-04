---
title: Instalación y configuración de Publitrackers
---


* Laptop con sistema operativo Windows con Internet Explorer y [SADP TOOL](https://s3.amazonaws.com/publitrackers-resources/software/SADPTool_V3.0.0.16.rar) instalado.
* Cámara IP Hikvision DS-2CD4A26FWD-IZHS/P
* Unidad de computo con `Publitrackers` instalado
* Inyector PoE `Opcional`
* Cable UTP. Categoría 6 de exteriores `Recomendado`
* Conectores RJ-45 `Recomendado`
* Fuente de poder a 12v `No recomendado`
* Cable eléctrico Duplex calibre 16 `No recomendado`

### Activación de la cámara

Como condición previa a la utilización de la cámara es preciso realizar los siguientes pasos:

* Conectar la cámara a una toma de la misma red ethernet en la cual estará conectado el server de `Publitrackers`.
  * Utilizar el cable UTP Categoría 6 de exteriores (Recomendado).
  * La cámara se puede alimentar de dos maneras. Mediante un inyector PoE(Recomendamos esta opción para ahorrar en cableado) o mediante una fuente de 12V DC.
  * La laptop deberá tener instalado [SADP TOOL](https://s3.amazonaws.com/publitrackers-resources/software/SADPTool_V3.0.0.16.rar)
* Configuración de la contraseña
  * Por motivos de seguridad, no es posible la utilización de la cámara mientras no se haya configurado una contraseña de administrador.
    * Iniciar la aplicación [SADP TOOL](https://s3.amazonaws.com/publitrackers-resources/software/SADPTool_V3.0.0.16.rar)
    * Seleccionar la cámara a activar.
    * Introducir la contraseña de activación y confirmarla en el campo de abajo. Luego presionar `Activate`
      *  la contraseña deberá tener al menos 8 caracteres alfanuméricos.
      * De preferencia ingresar una contraseña lo suficientemente segura para evitar inconvenientes.
      * Realizar las acciones oportunas para evitar olvidar la contraseña ingresada.
* Ajustar los parámetros de red
  * Utiliza [SADP TOOL](https://s3.amazonaws.com/publitrackers-resources/software/SADPTool_V3.0.0.16.rar) para ajustar los parámetros de red y compatibilizarlos con los parámetros de la red interna, si fuera necesario.
    * Tomar nota de la dirección IP y puertos asignados.
* A partir de este momento se puede utilizar Internet Explorer para acceder a las configuraciones de la cámara
  * En la barra de navegación deberá escribir la dirección IP asignada a la cámara e iniciar sesión con las siguientes credenciales:
    * Usuario : `admin`
    * Contraseña: `contraseña configurada anteriormente`

### Configuración de red

Para poder acceder a la cámara desde el server de Publitrackers, será necesario configurar la red. Los pasos son los siguientes:

* Acceder a la pestaña de configuración de red
  * Configuración > Red > Ajustes básicos > TCP/IP
  * Deshabilitar la opción DHCP
  * Introducir los mismos valores de IP, Mascara de Subred y Dirección IPv4 que fueron configurados desde SADP TOOL

### Posición del equipo

Para que Publitrackers pueda captar de mejor manera la data proveniente de los vehículos que transitan por el área, se deben de tener en cuenta los siguientes puntos:

* **Posición de la cámara**

  El encuadre de la cámara IP es una parte muy fundamental del sistema, ya que, si no se coloca la cámara de la mejor manera, el agente no le será posible captar la data. La cámara debe estar colocada de tal forma que pueda captar los vehículos que llegan hacia ella de forma perpendicular, desde el norte hacia el sur.

  <img src='https://s3.amazonaws.com/publitrackers-resources/recursos-graficos-manuales/saYU5bcCQ_3GZpZ_zi4y9NQ.png' width='700'>

* **Creación de zonas de conteo**

  El agente cuenta con una opción en la que el usuario será quien defina el área o zonas de conteo de tráfico. En otras palabras, es un área que podrá ser dibujada únicamente desde el Dashboard de Publitrackers. Dicha zona o área tiene el fin de ser el disparador del conteo de tráfico y una buena zona de conteo logrará captar los vehículos de mejor manera. Se debe crear en un área de la imagen donde sea óptimo y que no cubra parte de la calle que va en contrasentido, porque de ser así el agente efectuará un conteo no óptimo.

* **Ubicación del server de Publitrackers**

  El servidor físico debe colocarse en un área donde no exista filtración de agua y además debe contar con una buena ventilación para poder alargar la vida de uso del CPU y que éste no baje su rendimiento por temas de temperatura.

* **Condiciones de luz**

  La cámara IP a colocarse debe ser capaz de adaptarse a condiciones nocturnas para que el análisis de los vehículos sea óptimo. De esa misma forma, se recomienda que la pasarela posea una buena iluminación hacia la calle para que los vehículos puedan detectarse de mejor manera.

* **Detección de velocidad de vehículos**

  El agente cuenta con un Software que le permitirá al usuario obtener un promedio de velocidad de los vehículos que transitan por la zona especificada. Para obtener un mejor resultado, desde el Dashboard, el usuario deberá ingresar la distancia máxima que hay entre la zona de conteo y el primer punto en donde los vehículos empiezan a aparecer. Una vez ingresado este dato, el servidor se encargará de hacer los cálculos pertinentes para ofrecer al usuario la métrica de velocidad promedio.

### Malas practicas

Como se mencionó antes, Publitrackers fue desarrollado para que el análisis vehicular sea captado exclusivamente desde una pasarela.

Encuadres no óptimos son:

* **Cruz calle**

<img src='https://lh4.googleusercontent.com/zOd0eFgdmeSzUuXg6qxtjQs7Z678aG2wDnsA3BV2Ruzdn8DOyj1xXXy0azS3vsuy6k0HWbVvGtFJhh1jHMbLvp7C6PrEfk8fvn-47nR1KghX1mkWhXxmMqwsSnad_C4KSvMNRZA1WD1WprAwJQ' width='300'>

* **Encuadre desde un área donde los vehículos no pasan perpendicularmente**

  <img src='https://lh4.googleusercontent.com/hUn8KMNhOx__-FHi50X0r6ljbeuEZKChz7Yzic6UN_fzlNUYggPgamMGkgo0bNAqPY5x7n8bLK_TN6v5yyGh0ROR4WFcOXuSJYyWJcDsBlhSePBAIiJVTFnzYPbs5oAgTtSdfJypSdUDSTGUwQ' width='300'>

* **Colocación de cámara en un pilar. La cámara no estará tomando video por encima de los vehículos:**

  <img src='https://lh5.googleusercontent.com/Jotky8yof9_cPQaXyHuKLjl3Vhmya7SoDcYAakTQ6GxaXptfzpMjjeZzrgCaIRoVCRLjec3fG7YVgvaDp3X82gneldQCdYIa4a6dosYH49Y4gbLVjy2qziV7ChsTZx9hItNFYG2irDwh3no9WQ' width='300'>
  
  

### Configuración de imágen

Para modificar las configuraciones de imagen de la cámara deberá ingresar a: 

> `Configuration` > `Image` > `Display Settings`

* **Image Adjustment**
  * Mounting Scenario: `Road`
  * Brightness: `50`
  * Contrast: `70`
  * Saturation: `50`
  * Sharpness: `60`
* **Exposure Settings**
  * Iris Mode: `Auto`
  * Auto Iris Level: `50`
  * Exposure Time: `1/1000`
  * Gain: `100` 
* **Focus**
  * Focus Mode: `Manual`
* **Day/Night Switch**
  * Day/Night Switch: `Auto`
  * Sensitivity: `4`
  * Filtering Time: `5`
  * Smart Supplement Light: `ON`
  * Mode: `Auto`
* **Backlight Settings**
  * BLC Area: `OFF`
  * WDR: `OFF`
* **White Balance**
  * White Balance: `AWB2`
* **Image Enhancement**
  * Digital Noise Reduction: `Normal`
  * Noise Reduction Level: `50`
  * Defog Mode: `OFF`
  * EIS: `OFF`
  * Gray Scale: `[0-255]`
* **Video Adjustment**
  * Mirror: `OFF`
  * Rotate: `OFF`
  * Scene Modes: `Outdoor`
  * Video Standard: `NTSC(60HZ)`
  * Capture Mode: `OFF`
  * Lens Distorsion Correction: `OFF`
*  **Other**
  * Local Output: `ON`

### Configuración de video

Para modificar las configuraciones de video de la cámara deberá ingresar a: 

>  `Configuration` > `Video` > `Audio` > `Video`

* Stream Type: `Main Stream(Normal)`
* Video Type: `Video Stream`
* Resolution: `1280*720P`
* Bitrate Type: `Variable`
* Video Quality: `Highest`
* Frame Rate: `15 fps`
* Max Bitrate: `4096 Kbps`
* Video Encding: `H.264`
* H.264+ : `OFF`
* Profile: `High Profile`
* I Frame Interval: `50`
* SVC: `OFF`
* Smoothing: `50`



# Instalación de Publitrackers

Una vez que se haya instalado de forma correcta el sistema operativo Debian, se puede iniciar la instalación de Publitrackers.

Lo primero que se debe hacer es instalar el comando **sudo**.

Para ello tenemos que iniciar sesión como **superusuario**

```bash
su -
```

Nos pedirá la contraseña del Superusuario que fue definida al momento de la instalación del sistema operativo Debian.
Una vez dentro, se deben ingresar los siguientes comandos:

```sh
apt-get update
```

```sh
apt-get install sudo -y
```

Si la instalación no tuvo ningún problema, se puede proceder al siguiente comando:

```sh
usermod -aG sudo miusuario # miusuario es el usuario que se creó al instalar Debian
```

Si no sabemos cuál es nuestro usuario, basta con escribir en la Terminal:

```sh
whoami
```

Ahora se deben activar ciertos permisos que necesita Publitrackers para poder reiniciar el equipo en el momento que se desee. Siempre estando en la sesión del Superusuario se debe hacer lo siguiente:

```sh
visudo
```

Se abrirá el editor **Nano** con un archivo de configuraciones de **sudo**. Basta con ir hasta el final del documento y agregar lo siguiente:

```bash
miusuario ALL=NOPASSWD:/sbin/reboot
```

```sh
miusuario ALL=NOPASSWD:/sbin/shutdown
```

Recordando que *miusuario* es el usuario que se está usando actualmente.

 Una vez hecho esto, debemos reiniciar el equipo.

## Descarga de SETUP de Publitackers

Abrimos una Terminal y procedemos a descargar usando el comando **wget**

```sh
wget https://s3.amazonaws.com/publitrackers-resources/Setup/SETUP
```

Para poder ejecutar el **SETUP** se le deben otorgar permisos de ejecución de la siguiente manera:

```sh
chmod +x SETUP
```

Ahora se puede ejecutar de la siguiente manera:

```sh
./SETUP
```

En el proceso nos pedirá las credenciales del Superusuario. Una vez finalizado, el equipo se reiniciará.

Al entrar de nuevo al Sistema Operativo, nos aparecerá una carpeta o directorio llamado ***PUBLITRACKERS-CORE*** en donde se encuentran los Binarios. Hasta este punto, el agente de Publitrackers debería estar corriendo sin ningún problema. Para acceder a la sesión de Publitrackers, se debe escribir lo siguiente en la Terminal:

```sh
screen -r publitrackers
```

Si toda la configuración está bien, deberá aparecer menú de bienvenida:

![](https://s3.amazonaws.com/publitrackers-resources/recursos-graficos-manuales/bienvenidapublitrackers.png)

- Como este agente se está configurando desde cero, las opciones **1 y 2** no funcionarán porque requieren un agente registrado. Para registrar el agente, seleccione la opción **3**. El sistema preguntará si desea agregar un nuevo agente; seleccione la opción **S**. A este punto, el agente estará registrado, sin embargo, no tendrá ninguna cámara IP registrada ni una ubicación. El  **identificador único** de cada agente es su dirección MAC (por defecto es la dirección MAC del interfaz de Ethernet) y con dicho identificador puede ingresar al **dashboard** de Publitrackers y añadir la información restante de Ubicación y cámara IP, sin embargo la información de cámara IP puede ser 	agregada desde este mismo agente.
- Para añadir una cámara IP al agente, basta con regresar al menú principal y escoger la opción **2**. Al no existir una cámara IP vinculada al agente se le pedirá ingresar una. Para añadir una nueva cámara IP se requieren la IP de la cámara, el usuario y la contraseña.
- Si la IP, el usuario y contraseña fueron correctos, el agente ejecutará una prueba para verificar que los FPS y la resolución son los correctos.
- Hasta este punto, el usuario ya tiene la posibilidad de iniciar el agente de Publitrackers. Para ello, debe regresar al menú principal y escoger la opción **1**.
- Si no existe ningún problema con las credenciales e IP de la cámara IP, ni tampoco hay problemas con el agente, entonces aparecerá un mensaje donde pregunta al usuario si desea activar la opción de **auto inicio** que permite al agente iniciar de una vez Publitrackers sin mostrar el menú principal. Esta opción es útil si en algún dado caso el 	servidor se reinicia por algún apagón, ya que si no está en automático, esperará todo el tiempo a que el usuario escoja la opción de iniciar el agente de Publitrackers.
- Si Publitrackers ha iniciado de forma correcta, verá un mensaje que dice **Cargando modelo de extracción**, que significa que el Software inteligente ha empezado a reconocer el entorno y luego de pasados aproximadamente la analítica de vehículos empezará y podrá ver por cada vehículo que pase un *log* de color verde indicando que un vehículo fue detectado.

Si en algún momento se detiene la ejecución de Publitrackers, fácilmente se puede iniciar de nuevo corriendo dentro de la carpeta **~/PUBLITRACKERS-CORE:**

```sh
bash initiate.sh
```
