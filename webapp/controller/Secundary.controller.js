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

    //
    return BaseController.extend("com.accenture.navegacion_ui.controller.Secundary", {

        onInit: function () {
            //Esta función la podriamos llamar desde un botón si no queremos que los datos se carguen al inicio de la vista.
            //this.guardaJsonEnObjeto();
        },

        funcion_boton3: function(){
            /*Se va al apartado routing del manifest.json y mira donde esta la vista Manifest_route_name_Main, 
            después dentro del mismo manifest busca en el apartado targets a que vista apunta secundary*/
            this.getRouter().navTo("Manifest_route_name_Main");
        },

        //Vamos a crear la función initModels() que CARGARÁ LOS MODELOS DE DATOS EN LA VISTA CUANDO SEA LLAMADA
        guardaJsonEnObjeto: function (){
            //Instanciamos un modelo de datos de tipo JSONModel
            var oObjetoContenedorDatosJson = new sap.ui.model.json.JSONModel();
            //Inicializamos el modelo. OJO.La ruta tiene que ser MockedData/archivo.json ya que se tiene en cuenta el oridgen desde la raiz del modulo html5 (navegacion_ui)
            oObjetoContenedorDatosJson.loadData("MockedData/capitales.json");
            //Accedemos a las propiedades de la vista asociada a este controlador y le asignamos el modelo de datos creado
            this.getView().setModel(oObjetoContenedorDatosJson, "alias_oObjetoContenedorDatosJson");
        }

    });
});