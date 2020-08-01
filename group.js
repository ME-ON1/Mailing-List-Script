//let range = s.getRange(2, 1, s.getLastRow()-1 , s.getLastColumn() )
//Name 	Email	Phone NO	Price	Date 	Month Over date 	Current Date 	Days Left!! 	Paid Or Not	Email sent 
//let data = range.getValues()

/*function to sort daa in two groups*/

function sortDatainTwoGroup(){
  //data is array of all the field data 
  
  data.sort((a,b)=>{
            if(a[7] > b[7] && a[8] === b[8]){
             return 1 ;
            }
            else if(b[7] > a[7] && a[8] === b[8] && !a[8]){
              return -1 ;}
            else {
              if(a[8] !== b[8]){
                if(!a[8]){return 1 ;}
                else if(!b[8]) {return -1 ; }
              }
            }
                      })

                      for(let i = 0; i < data.length ; i++ ) {
                           Logger.log(data[i][7], data[i][8]) 
                      }
  range.setValues(data)
}

function falseFrom(){
  let itStart ;
  
  return itStart ;
}