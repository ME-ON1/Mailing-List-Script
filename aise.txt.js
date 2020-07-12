 
      const blurhandler = (e)=>{
         var regex = {
             name : /^[A-Za-z]+$/,
             p_number : /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
             date : /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/,
             price : /^[\d\.,]+$/
         }
         var n = 0 , p_n = 0 ,  d = 0 , p = 0 ;
         if(e.target.name === "name"){
      
         if(!e.target.value.match(regex.name)){
             return alert("please write name in letters ")
         }
         }
         else if(e.target.name === "p_number"){
              if(!e.target.value.match(regex.p_number)){
                  return alert("plese enter right indian number ")
              }
         }
         else if(e.target.name === "date"){
            if(!e.target.value.match(regex.date)){
                return alert("please enter mm/dd/yyyy format ")
            }
         }
         else if(e.target.name === "price" ){
           if(!e.target.value.match(regex.price)){
                 return alert("please enter right price")
           }
         }
         } 
         
         
         
      
          