// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend("com.accenture.navegacion_ui.controller.BaseController", {
            
        /*********** Estas funciones las desarrollamos en el BaseController y las heredaremos en los otros controladores ******/
            getRouter : function () {
            return UIComponent.getRouterFor(this);
        },
        /**
         * Convenience method for getting the view model by name.
         * @public
         * @param {string} [sName] the model name
         * @returns {sap.ui.model.Model} the model instance
         */
        getModel : function (sName) {
            return this.getView().getModel(sName);
        },
        /**
         * Convenience method for setting the view model.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         */
        setModel : function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },
        /**
         * Getter for the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        }

        /*************************************************************************************************************/
		});
	});