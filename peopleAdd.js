function onOpen() {
  SpreadsheetApp.getUi().createMenu("functions can perform").addItem("add new member!","doGet").addSeparator().addSubMenu(SpreadsheetApp.getUi().createMenu("actions").addItem("find defaulter!", 'getem').addItem("set Current date", "setDate")).addToUi()
} 


function doGet(request) {
  var hmtl =  HtmlService.createTemplateFromFile('form')
      .evaluate();
  SpreadsheetApp.getUi().showModalDialog(hmtl, "Add members ")
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function setDate(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(2,8,s.getLastRow(),1);
  var values = range.getValues()
  
  for(var i = 0 ; i < values.length - 1; i++ ) {
      values[i][0] = new Date().toLocaleDateString();
  }
  
  range.setValues(values)
}

/* Adding form data in the last row by form */

function addNewItem(form){ 
   var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
   var r = s.getRange(s.getLastRow(),1, 1,s.getLastColumn())
   
   s.appendRow([form.name, form.p_number, form.price,form.date, setOverMonth(form.date)]);
  
}
