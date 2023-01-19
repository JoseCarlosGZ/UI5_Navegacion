
/*
Un controlador en SAP UI5 es un archivo javascript que por convención tendrá el mismo nombre que la vista que maneja.
En una aplicación SAP UI5, los controladores tienen la doble extensión .controller.js

El contenido de un controlador en SAP UI5 está formado por una función sap.ui.define() que recibe dos parámetros:

    1) El primero será una matriz con los "imports" de las clases y controles de la API de UI5 que vayamos a usar.

    2) El segundo parámetro es a su vez otra función que ha de recibir como parámetros los mismos objetos/clases que
     hemos importado,y en el return de esta segunda función tenemos que poner la ruta de este mismo controlador que 
     está heredando del controlador padre BaseController.
*/
sap.ui.define([
/*Como todos los controladores van a heredar de la clase BaseControler, tenemos que importarla. Como la clase 
        que vamos a importar (BaseController) está en la misma carpeta que la clase actual desde la que estamos 
        importando (App), entonces en la ruta sólo hay que poder ./BaseController*/
        "./BaseController"
	],
	function (BaseController) { //Como parámetros metemos las clases importadas, en el mismo orden y separadas por comas. En este caso sólo se importa una
		"use strict";

		return BaseController.extend("com.accenture.navegacion_ui.controller.App", {  //Esta clase App hereda de BaseController. Por lo tanto hemos tenido que importar antes la clase BaseController
			onInit: function () {

			}
		});
	});
