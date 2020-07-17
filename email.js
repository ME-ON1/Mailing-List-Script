function sendMail(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet() ;
  var startRow = 2 ; // 1- based
  var startColumn = 2 ; // 1- based 
  var range = s.getRange(startRow,1, s.getLastRow()-1, s.getLastColumn());
  var values = range.getValues();
  
  
//  Logger.log(values)
  
  values.map((i,index)=>{
             var address = i[1];
//             Logger.log(address)
             if(address != "" && i[7] < 4 &&  i[9] != "SENT"){
    var daysLeft =  Math.abs(i[7]);
    var subject = "REGARDING THE PAYMENT OF BROADBAND " ; 
    
    var html = HtmlService.createHtmlOutput("")
    
    MailApp.sendEmail({
      to : address,
      subject : subject ,
      htmlBody : ""  })
    s.getRange(startRow + index +1 , s.getLastColumn()).setValue("EMAIL_SENT");

  }
             })
  
  
}

function mailer(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet() ;
  var startRow = 2 ; // 1- based
  var startColumn = 2 ; // 1- based 
  var range = s.getRange(startRow,1, s.getLastRow()-1, s.getLastColumn());
  var values = range.getValues();
 
//  let hmtl = HtmlService.createHtmlOutputFromFile("emailhtml"); 
  let hmtl = HtmlService.createTemplateFromFile("emailhtml").evaluate()
  
//  Logger.log(hmtl.getContent())

  MailApp.sendEmail({
    to: "starun.1998@gmail.com",
    subject: "Logos",
    htmlBody: hmtl.getRawContent()
  });

}

function setEmailData(arr){
  Logger.log(arr)
  return {
    phoneNumber : arr[2],
    daysleft : arr[7] 
  }
}

function get(){
  var r =  MailApp.getRemainingDailyQuota();
  Logger.log(r)
}