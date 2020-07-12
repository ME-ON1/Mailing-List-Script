function OnOpen() {
  SpreadsheetApp.getUi().createMenu("deduce").addItem("find defaulter!", 'getem').addToUi()
}

async function getem () {
  await setDate()
  await setOverMonth()
  await daysLeft()
}


// calculating days_left 

//function daysLeft(){
//  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
//  var dayLeftRange = s.getRange(2,7,s.getLastRow(),s.getLastColumn()) // selecting days left columnn 
//  
//  var calRange = s.getRange(2,5,s.getLastRow(),2); //selecting current date and month over date 
//  var calValues = calRange.getValues()
//  
//
//  var dayLeftValues = dayLeftRange.getValues();
////
////  for(var i =  0 ; i < calValues.length  - 1; i++) {
////    if(calValues[i][0] != " "  && dayLeftValues[i][0] != " " ){
////     dayLeftValues[i][0]  = diff(new Date(calValues[i][0]),new Date(calValues[i][1]))
////     if(dayLeftValues[i][0] <= 3 ){
////       var r = (255 - Math.abs(dayLeftValues[i][0] * 10)); 
////       Logger.log(r)
////       s.getRange(i+2,1,1,s.getLastColumn()).setBackgroundRGB(r , 0, 0)
////     }
////      else if(dayLeftValues[i][0] > 15 ) {
////        s.getRange(i+2,1,1,s.getLastColumn()).setBackground("white");
////        s.getRange(i+2,s.getLastColumn(),1,1).setValue("its time")
////      }
////    }
////  }
////  
//  dayLeftRange.setValues(dayLeftValues)
//  
//}

// util function calcaluate the days between two dates 

function diff(endDate,currDate){
  return ((endDate.getTime()- currDate.getTime())/(1000*24*60*60));
}


// set the end date in the column "Month over date " 


function setOverMonth(){
  var s = SpreadsheetApp.getActiveSpreadsheet()
  var sheetRange = s.getActiveSheet().getRange(2, 5 , s.getActiveSheet().getLastRow() - 1 ,2) // selecting month over column
  var sheetValues = sheetRange.getValues();
   
  Logger.log(sheetValues)
  
  for(var i = 0 ; i < sheetValues.length - 1; i++ ){
      var d = new Date(sheetValues[i][0]);
      
    if(d.getMonth() <= new Date(sheetValues[i][1]).getMonth() && s.getActiveSheet().getRange(i+2,8,s.getActiveSheet().getLastRow() -1 ,1).getValue() === "AND YOU HAVE PAID"){
      d.setMonth(d.getMonth() + 1);
    }      
      sheetValues[i][1] = d;
  }
  
  sheetRange.setValues(sheetValues);
  
}

// set the current date in the column "Current Date"

function setDate(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(2,6,s.getLastRow(),1);
  var values = range.getValues()
  
  for(var i = 0 ; i < values.length - 1; i++ ) {
      values[i][0] = new Date().toLocaleDateString();
  }

  range.setValues(values)
}



//filled the "true or false" in paid Or not ;
 
function testfucntion() {
  var s = SpreadsheetApp.getActiveSpreadsheet()
  var sheetRange = s.getActiveSheet().getRange(2, s.getLastColumn() ,s.getLastRow(),1)
  var sheetValues = sheetRange.getValues();
  
  
  for(var i = 0 ; i < sheetValues.length - 1; i++ ){
    var p  = Math.round(Math.random()*(sheetValues.length));

    
    if(p%2){
      sheetValues[i][0] = false
    }
    else {
      sheetValues[i][0] = true ;
    }
  }
  sheetRange.setValues(sheetValues)
}
