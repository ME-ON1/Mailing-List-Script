/*First version didnt succeded */


function myFunction() {
 var s = SpreadsheetApp.getActiveSpreadsheet() ;
  s.rename("Mailing list")
  s.getActiveSheet().setName("Mail");
}

// selected user data from excel

//
//function onOpen() {
//  SpreadsheetApp.getUi().createMenu("scripts").addItem("find Defaulter", "getData").addItem("selected paid?","paid").addToUi()
//}


function getRows() {
  var s = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = s.getSheetByName("Mail");
  
  var range = sheet.getRange(2 , 5 ,2 ,12)
  var values =  range.getValues();
//  Logger.log(values)
  return values;
}

// checking if paid or not 

function getData(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet()
  var activeSheet = sheet.getActiveSheet()
  
  var curr_month = new Date().getMonth();
  
  var data = getRows();
  var month = setMapValues();
  Logger.log(data);
  var activeRange = activeSheet.getRange(2 , 5 ,2, 12)
  Logger.log(activeRange.getValues())
  
  for(var row = 0 ; row < data.length; row++ ){
    if(data[row][curr_month] === false){
      activeRange.getCell(row+1, curr_month + 1).setBackground("red");
    }
  }
  
  activeRange.setValues(data)
}

// row month in map
function setMapValues(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var mi = sheet.getActiveSheet()
  var newRange = mi.getRange(1, 5, 1, 12)
  
  var monthValues = newRange.getValues()
  
  
  var month = []
  
  monthValues.map((i) =>{
                  i.map((j,index) => month.push(j))
                  })

   return month;
}

function paid() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var activeSheet = sheet.getActiveSheet()
  var activeCell = activeSheet.getActiveCell();
 
  
  if(activeCell.getValue() == true ){
    activeCell.setBackground("green")
  }
  
//  activeSheet.setValue(activeCell)
}