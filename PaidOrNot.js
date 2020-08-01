/*second version - succeded as of now */


async function getem () {
  await setDate()
  await setOverMonth()
  await daysLeft()
}



// calculating days_left 

//function daysLeft(){
//  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
//  var dayLeftRange = s.getRange(2,8,s.getLastRow(),s.getLastColumn()) // selecting days left columnn 
//  
//  var data = dayLeftRange.getValues() ;
//  
//  for(let i in data ){
//     
//  }  
//}


/* left days in the left column 
select column column set over month and calucalte difference 
*/


//function daysLeft(){
//  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//  var values = s.getRange(2, 5 , s.getLastRow()-1 , 1).getValues();
//  
//  Logger.log(values) 
//} 

// util function calcaluate the days between two dates 



// set the end date in the column "Month over date " 
// selecting two columns all rows :- month over date and starting date  

function setOverMonth(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetRange = s.getRange(2, 6, s.getLastRow() - 1 , 2) // selecting month over column and current date column 
  
  var sheetValues = sheetRange.getValues(); // their values month starting and o ver date 
  
  for(var i = 0 ; i < sheetValues.length ; i++ ){
    let d = new Date(sheetValues[i][0]) ; 
    
    sheetValues[i][1] = new Date(d.setMonth(d.getMonth() + 1 )).toLocaleDateString();
    Logger.log(sheetValues[i][1])
    
    
  }
  sheetRange.setValues(sheetValues);
  
}

// set the current date in the column "Current Date"
// abandoned
//function setDate(){
//  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
//  var range = s.getRange(2,8,s.getLastRow(),1);
//  var values = range.getValues()
//  
//  for(var i = 0 ; i < values.length - 1; i++ ) {
//      values[i][0] = new Date().toLocaleDateString();
//  }
//
//  range.setValues(values)
//}
