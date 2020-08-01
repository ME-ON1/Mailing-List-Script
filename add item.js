function onOpen() {
  SpreadsheetApp.getUi().createMenu("find em").addItem("who havent paid", 'findem').addItem("pending bills", "doGet").addToUi()
}

/*selectin last olumn ,paid or not ,finding if the bills are pad or not*/
//
//
//function findem(){
//  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
//  var range = s.getRange(2, s.getLastColumn() , s.getLastRow() - 1, 1)
//  var values = range.getValues()
//  
//  for(var i = 0 ; i < values.length ; i++ ) {
//    if(values[i][0]){
//         values[i][0] = !values[i][0];  
//         var p = s.getRange(i+1, 5);
//         var t = p.getValue()
//
//         t.setMonth(new Date(t).getMonth() + 1);
//         s.getRange(i+1, 1, 1, s.getLastColumn()).setBackground("Green")
//         p.setValue(t)
//    }
//  }
//  
//      range.setValue(values)
//      daysLeft();
//}

// checking util func if paid or not column has False in it 

function CheckUtil(rowIndex,columnIndex,nro,nco){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(rowIndex,columnIndex , nro, nco) ;
  var values = range.getValue();
  
  return (values === "false" ?  0 : 1 ) ;  
}


// checking 
// days let column 
 

function daysLeft(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var range = s.getRange(2,7, s.getLastRow()- 1,3 )
  var values = range.getValues() // select every column 
  
  for(let i in values ){
    values[i][2] = Math.round(dateDiff(values[i][0])); 
  }
  
  range.setValues(values)
 
}

// diff between two days 

function dateDiff(endDate){
  var currDate = new Date()
  return ((endDate.getTime()- currDate.getTime())/(1000*24*60*60));
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