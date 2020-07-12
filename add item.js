function onOpen() {
  SpreadsheetApp.getUi().createMenu("find em").addItem("who havent paid", 'findem').addItem("pending bills", "doGet").addToUi()
}


function findem(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(2, s.getLastColumn() , s.getLastRow() - 1, 1)
  var values = range.getValues()
  
  Logger.log(values)
  
  for(var i = 0 ; i < values.length ; i++ ) {
    if(values[i][0]){
         values[i][0] = !values[i][0];  
         var p = s.getRange(i+1, 5);
         var t = p.getValue()

         t.setMonth(new Date(t).getMonth() + 1);
         s.getRange(i+1, 1, 1, s.getLastColumn()).setBackground("Green")
         p.setValue(t)
    }
  }
  
      range.setValue(values)
      daysLeft();
}

// checking util func if paid or not 

function CheckUtil(rowIndex,columnIndex,nro,nco){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(rowIndex,columnIndex , nro, nco) ;
  var values = range.getValue();
  
  if(values === "false")
  {
    return 0;
  }
  else {
    return 1;
  }
  
}


// checking 

function daysLeft(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var dayLeftRange = s.getRange(2,7,s.getLastRow()- 1 ,2) // selecting days left columnn 
  
  var calRange = s.getRange(2,5,s.getLastRow(),2); //selecting current date and month over date 
  var calValues = calRange.getValues()
  

  var dayLeftValues = dayLeftRange.getValues();
  
 

  for(var i =  0 ; i < calValues.length ; i++) {
    if(CheckUtil(i+2,s.getLastColumn()-1,1,1) == 0){
      dayLeftValues[i][0]  = diff(new Date(calValues[i][0]),new Date(calValues[i][1])) > 15 ? "ITS TIME" :  diff(new Date(calValues[i][0]),new Date(calValues[i][1]));      
       if(dayLeftValues[i][0] <= 3 && isNaN(dayLeftValues[i][0]) != true ){
          var r = Math.abs(255 - Math.abs(dayLeftValues[i][0] * 4))%255; 
          Logger.log(r)
          s.getRange(i+2,1,1,s.getLastColumn()).setBackgroundRGB(r , 0, 0)
       }
       else  if(dayLeftValues[i][0] < 15 && dayLeftValues[i][0] > 3) {
        s.getRange(i+2 ,  s.getLastColumn() ,1, 1 ).setValue("you have paid?")
        s.getRange(i+2,1,1,s.getLastColumn()).setBackgroundRGB(0,255,0).setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT)
       }
       Logger.log(dayLeftValues[i])
       }
  dayLeftRange.setValues(dayLeftValues);
   }
}

//rendering hrml

function doGet() {
  var output = HtmlService.createHtmlOutputFromFile("index").setTitle("Penders")
  SpreadsheetApp.getUi().showModalDialog(output, "penders")

}
// selected two columns daysleft and paid ot not
// values -> array in array 


function getpenders() {
  var s = SpreadsheetApp.getActiveSpreadsheet()
  var range1 = s.getActiveSheet().getRange(2,7,s.getLastRow() - 1 , 2 );
  var range2 = s.getActiveSheet().getRange(2,1,s.getLastRow() - 1 , 1);
  var values = range1.getValues();
  var val = range2.getValues();
  
///  Logger.log(values)
  for(var i = 0 ; i < values.length; i++ ){
    if(values[i][0] == "ITS TIME" ) {
      values.splice(i, 1);

    }
    values[i].push(val[i][0])
  }
  Logger.log(values)
  return values;
}