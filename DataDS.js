/*placed both group in two different groups of PAID and false */

let range = s.getRange(2, 1, s.getLastRow()-1 , s.getLastColumn() )

let data = range.getValues() ;

let newData = new Array() ; // getting the two grp data in this array and then set it to the range 


let paidroot = null ;
let falseroot =  null ;

/*Node for both the tree */

var Node = function (value) {
  this.fine = value[8] ;
  this.data = new Array() ;
  
  this.pushit = function (value){ 
    this.data.push(value)
  } 
  this.left = null ;
  this.right = null ;
};

function insert(root, data) {
  if(root == null) { 
    root = new Node(data);
  }
  
  if(root.fine === data[8] ){
    root.pushit(data)
  }
  
  if(root.fine > data[8]) {
    root.left = insert(root.left , data ) 
  }else if(root.fine < data[8] ) {
    root.right = insert(root.right, data ) ;
  }
  
  return root;
}

function traverse(root) {
  if (root == null) {
    return;
  }
  
  traverse(root.left) ; 
  if(root.data.length === 1 ) {
    newData.push(root.data[0]);
  } 
  else 
  {
    Logger.log("it has more ")
    for(let i in root.data) {
      newData.push(root.data[i])
    }
  }
  traverse(root.right);
}

function runthis(){
  
  for(let i  = 0 ; i < data.length ; i++ ){
    
    if(data[i][9]){ // days left column 
      paidroot = insert(paidroot, data[i]) ;
    }else {
      falseroot = insert(falseroot, data[i]) ;
    }
    
  }
  
  traverse(paidroot) ;
  traverse(falseroot) ;
  Logger.log(newData)
  range.setValues(newData)
}


function preOrderFalseRoot(root){
  if(root != null ){
    if(root.data[11].trim() === "C"){
      root.data[11] = "NN" ; 
      root.data[9] = "PAID"
      let d = new Date(root.data[5]); 
      
      root.data[5] = new Date(d.setMonth(d.getMonth() + 1 )).toLocaleDateString()
      root.data[6] = new Date(d.setMonth(d.getMonth() + 1 )).toLocaleDateString()
      root.data[8] = Math.round(dateDiff(new Date(root.data[6])));
      insert(paidroot, root.data) 
    }
    
    preOrderFalseRoot(root.left);
    preOrderFalseRoot(root.right)
  }
}