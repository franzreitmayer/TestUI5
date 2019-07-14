sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
	getControllerName: function() {
		return "sapui5.demo.mvcapp.controller.Master";
	},
	
	createContent: function(oController) {
		// columns will act as column headers
		var aColumns = [
			new sap.m.Column({header: new sap.m.Text({text: "ID"})}),
			new sap.m.Column({header: new sap.m.Text({text: "Name"})})	
		];
		
		// in the template the supplier informtion will be displayed
		var oTemplate = new sap.m.ColumnListItem({
			type: "Navigation",
			cells: [
				new sap.m.ObjectIdentifier({text: "{ID}"}),
				new sap.m.ObjectIdentifier({text: "{Name}"})
			]
		});
		
		// display the number of suppliers at the header
		var oTableHeader = new sap.m.Toolbar({
			content: [
				new sap.m.Title({
					text: "Number of Suppliers: {/CountSuppliers}"
				})
			]
		});
		
		// we create the table with the column header
		var oTable = new sap.m.Table({
			columns: aColumns,
			headerToolbar: oTableHeader
		});
		
		// bind the array 'Suppliers' of the JSONModel resp. the JSONData 'oData'
		// to the table and bind the template also
		oTable.bindItems("/Suppliers", oTemplate);
		
		var oPageMaster = new sap.m.Page( {
			title: "Supplier Overview",
			content: [oTable]}
		);
		
		return oPageMaster;

	}

	
});