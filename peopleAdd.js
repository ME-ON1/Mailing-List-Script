function onOpen() {
  SpreadsheetApp.getUi().createMenu("Add new member").addItem("add new member!","doGet").addToUi()
  
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