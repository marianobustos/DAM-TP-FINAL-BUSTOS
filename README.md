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

git clone https://github.com/marianobustos/DAM-TP-FINAL-BUSTOS.git

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

