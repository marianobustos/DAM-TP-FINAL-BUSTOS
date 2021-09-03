<a href="https://github.com/brianducca/dam">
    <img src="doc/stack.jpg" alt="logo" title="TP FINAL DAM" align="right" width="180" height="60" />
</a>

Desarrollo de aplicaciones multiplataforma
===========================================

Trabajo Práctico Final
Desarrollo de aplicaciones multiplataforma
4ta Cohorte 2021
Autor: Mariano Matias Bustos
Docente: Brian Ducca

## Introducción general
El proyecto consiste en el diseño e implementación de una aplicación para el control de un sistema de riego automatizado. Se aplicaron conceptos vistos durante la cursada de la materia implementando los mismos en el diseño de una aplicacion con el framework Angular utilizando Ionic para darle una adaptabilidad a los dispositivos móviles.

## Comenzando 🚀

Esta sección es una guía con los pasos escenciales para que puedas poner en marcha la aplicación.

<details><summary><b>Mira los pasos necesarios</b></summary><br>

### Descargar el código

Para descargar el código, lo más conveniente es que realices un `fork` de este proyecto a tu cuenta personal haciendo click en [este link](https://github.com/marianobustos/DAM-TP-FINAL-BUSTOS/fork). Una vez que ya tengas el fork a tu cuenta, descargalo con este comando (acordate de poner tu usuario en el link):

```
git clone https://github.com/USER/DAM-TP-FINAL-BUSTOS.git
```

> En caso que no tengas una cuenta en Github podes clonar directamente este repo.

```
git clone https://github.com/marianobustos/DAM-TP-FINAL-BUSTOS.git
```
### Instalar las dependencias

Para correr este proyecto es necesario que instales `Docker` y `Docker Compose`. 

En [este artículo](https://www.gotoiot.com/pages/articles/docker_installation_linux/) publicado en nuestra web están los detalles para instalar Docker y Docker Compose en una máquina Linux.

En caso que quieras instalar las herramientas en otra plataforma o tengas algún incoveniente, podes leer la documentación oficial de [Docker](https://docs.docker.com/get-docker/) y también la de [Docker Compose](https://docs.docker.com/compose/install/).

Para el correcto funcionamiento del frontend se requiere tener instalado el framework Ionic. Para la instalación de Ionic se utiliza el comando :

npm install -g @ionic/cli

Para poder visualizar la vista Lab pudiendo testear la compatibilidad visual con dispositivos Android y IOS simultaneamente se requiere instalar:

npm i @ionic/lab

Luego debemos movernos a la carpeta Ionic y ejecutar:
npm install 

### Ejecutar la aplicación

Para ejecutar la aplicación tenes que correr dos comandos:
1) El comando `docker-compose up` desde la raíz del proyecto. Este comando va a descargar las imágenes de Docker de node, de la base datos y del admin de la DB, y luego ponerlas en funcionamiento.

2) Luego desde la carpeta Ionic tendrás que ejecutar el siguiente comando para poder ejecutar el frontend:
ionic serve --lab

Luego se podrá acceder con un browser a dos url segun la vista que deseemos ver:

Lab: http://localhost:8200

Local: http://localhost:8100

Continuá explorando el proyecto una vez que lo tengas funcionando.

## Configuraciones de funcionamiento 🔩

Al crearse la aplicación se ejecutan los contenedores de Docker de cada servicio, se crea la base de datos y sus tablas. A continuación podés encontrar info si querés cambiar la estructura de la DB o bien sus configuraciones de acceso.

<details><summary><b>Lee cómo configurar la aplicación</b></summary><br>

### Configuración de la DB

Como ya comprobaste, para acceder PHPMyAdmin tenés que ingresar en la URL [localhost:8001/](http://localhost:8001/). En el login del administrador, el usuario para acceder a la db es `root` y contraseña es la variable `MYSQL_ROOT_PASSWORD` del archivo `docker-compose.yml`.

Si quisieras cambiar la contraseña, puertos, hostname u otras configuraciones de la DB deberías primero modificar el servicio de la DB en el archivo `docker-compose.yml` y luego actualizar las configuraciones para acceder desde PHPMyAdmin y el servicio de NodeJS.

### Estructura de la DB

Al iniciar el servicio de la base de datos, si esta no está creada toma el archivo que se encuentra en `db/dumps/estructuraTPDAM-phpmyadmin.sql` para crear la base de datos automáticamente.

En ese archivo está la configuración de la base de datos `DAM` y otras configuraciones más. Si quisieras cambiar algunas configuraciones deberías modificar este archivo y crear nuevamente la base de datos para que se tomen en cuenta los cambios.

Tené en cuenta que la base de datos se crea con permisos de superusuario por lo que no podrías borrar el directorio con tu usuario de sistema, para eso debés hacerlo con permisos de administrador. En ese caso podés ejecutar el comando `sudo rm -r db/data` para borrar el directorio completo.

</details>

...
...

## Tecnologías utilizadas 🛠️

En esta sección podés ver las tecnologías más importantes utilizadas.

<details><summary><b>Mira la lista completa de tecnologías</b></summary><br>

* [Docker](https://www.docker.com/) - Ecosistema que permite la ejecución de contenedores de software.
* [Docker Compose](https://docs.docker.com/compose/) - Herramienta que permite administrar múltiples contenedores de Docker.
* [MySQL](https://www.mysql.com/) - Base de datos para consultar y almacenar datos.
* [PHPMyAdmin](https://www.phpmyadmin.net/) - Administrador web de base de datos.
* [Node JS](https://nodejs.org/es/) - Motor de ejecución de código JavaScript en backend.
* [Express](https://expressjs.com/es/) - Framework web utilizado para crear la API del proyecto.
* [Angular](https://angular.io/) - Framework utilizado para desarrollar el frontend.
* [Ionic](https://ionicframework.com/) - Framework utilizado para crear aplicaciones híbridas (web/mobile).

</details>