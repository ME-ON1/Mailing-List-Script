/*placed both group in two different groups of PAID and false */

let range = s.getRange(2, 1, s.getLastRow()-1 , s.getLastColumn() )

let data = range.getValues() ;

let newData = new Array() ; // getting the two grp data in this array and then set it to the range 


/*Node for both the tree */
var Node = function (value) {
    this.data = value ;
    this.left = null ;
    this.right = null ;
};

function insert(root, data) {
    if(root == null) { 
        root = new Node(data);
    }
    
  if(root.data[8] > data[8]) {
       root.left = insert(root.left , data ) 
  }else if(root.data[8] < data[8] ) {
      root.right = insert(root.right, data ) ;
  }
 
  return root;
}

function traverse(root) {
  if (root == null) {
    return;
  }
  
  traverse(root.left) ; 
  newData.push(root.data)
  traverse(root.right);
}

function runthis(){
 
  let paidroot = null ;
  let falseroot =  null ;
  
  for(let i  = 0 ; i < data.length ; i++ ){
    
    if(data[i][9]){ // days left column 
      paidroot = insert(paidroot, data[i]) ;
    }else {
      falseroot = insert(falseroot, data[i]) ;
    }
    
  }
  
  traverse(paidroot) ;
  traverse(falseroot) ;
  
  range.setValues(newData)
}