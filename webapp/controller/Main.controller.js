
// @ts-nocheck
sap.ui.define([
        //Ojo BaseController no lleva el .controller porque no va a manejar ninguna vista por si mismo
        "./BaseController",
        "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, MessageToast) {
		"use strict";

      
		return BaseController.extend("com.accenture.navegacion_ui.controller.Main", {
			onInit: function () {
     

            },
            funcion_boton1: function(){
                //var o_variable_contenedora = this.getOwnerComponent().getModel(“i18n”).getResourceBundle();
                /*La siguiente instrucción es igual que la de arriba comentada, solo que reducida ya que
                estamos usando un método personalizado en BaseController.js que contiene a su vez todas las 
                instrucciones de arriba.
                Lo que hace esta instrucción es meter en un objeto todas las propiedades/variables contenidas en el 
                modelo i18n*/
                var o_variable_contenedora = this.getResourceBundle();
                //Usando el método getText ya tenemos acceso a todas las propiedades del modelo i18n
                MessageToast.show(o_variable_contenedora.getText("mensaje_del_toast"));
            },
            funcion_boton2: function(){
                /*Se va al apartado routing del manifest.json y mira donde esta la vista Secundary, despues dentro del mismo manifest busca en el apartado targets a que vista apunta secundary*/
                this.getRouter().navTo("Manifest_route_name_Secundary");
                //Tambien podemos navegar a lo burro así:
                // sap.ui.core.UIComponent.getRouterFor(this).navTo("Manifest_route_name_Secundary");
            }
		});
	});