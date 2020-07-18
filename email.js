 var s = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet() ;

// obj constructor for every row data

function mailMaterial(arr){
  this.name  = arr[0] ; 
  this.email  = arr[1] ;
  this.phoneNumber = arr[2] ; 
  this.daysleft = arr[7];
  return this;
}


//selecting all rows and making obj passing it to "mailer"

function sendMail(){
  let startRow = 2 ; // 1-based
  var range = s.getRange(startRow,1, s.getLastRow()-1, s.getLastColumn());
  var values = range.getValues();
  
  values.map((row)=>{
             if(row[1].length != 0){
             let obj = new mailMaterial(row);
             mailer(obj)
  }
             })
}


// @request is row data as obj 
// MailApp fucntion to send mail to all  the other function 
function mailer(request){
  MailApp.sendEmail({
    to : request.email,
    subject : "Bill payment",
    name : "Automatic email generator",
    htmlBody : htmlTemplate(request)
  })
  
}

// template to render in mail

function htmlTemplate(request){
//      return ( <!DOCTYPE html><html><head><base target=\"_top\"></head><body><h1> Regarding the Bill payment of your payment for the Email ID " + values[0][1] + "</h1><h3>As only </h3>" + values[0][7] + "<h3>are left </h3><p> Click below to go to site and see your bill </p><button><a href=\"https:google.com/\">BIll payment</a></button><p>if you have paid then click on this below LINK! </p><button><a href=\"#\">CLICK ME </a></button></body></html> 
  return  '<!DOCTYPE html><html><head><base target="_top"></head><body><div style="text-align: center;' +
    'font-family: Arial;"><div id="center" style="width:300px;border: 2px dotted grey;background:' +
    '#ececec; margin:25px;margin-left:auto; margin-right:auto;padding:15px;"><br /><div style=" border: 2px dotted grey;' +
    'background:white;margin-right:auto; margin-left:auto; padding:10px;"><h2>' + "BILL PAYMENT REMINDER" +
    '</h2><h3>' + "YOUR BILL FOR BROADBAND CONNECTION REGISTERED DETAILS " + '<br /><br/>' + request.name + '<br/>'+
    '<br /><p> for Mail ' + request.email + '</p>'+ 
    '<br /><p> mobile Number ' + request.phoneNumber + '<p/>' +
    '</h3><br /> <p>As only ' +  Math.abs(request.daysleft) + '</p> ' +
    '<br /> <p>if you have already submitted it, then </p>' + 
    '<br /> <button href="https://google.com"> click ME to confirm </button>'
    '<br /> <p>stop recieving me you eould do without reminder then</p>' +
    '<br /> <button href="#">Stop recieving</button>' + 
    '<br /></div></div></body></html>'
}


// just to check the mail limit of the my id 
function get(){
  var r =  MailApp.getRemainingDailyQuota();
  Logger.log(r)
}