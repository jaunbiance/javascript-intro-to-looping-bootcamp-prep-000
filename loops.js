function forLoop(arr){
  for (var i=0; i<25; i++){
    if (i===1){
      arr.push("I am 1 strange loop.");
    }else{
      arr.push(`I am ${i} strange loops.`);
    }
  }return arr;
}

function whileLoop(num){
  while(num>0){
    console.log(num--);
  }return 'done';
}

function doWhileLoop(num){
  function incrementVariable() {
    var i = i+1;
    return i;
  }
  do{
    console.log("I run once regardless.");
  }while(incrementVariable()<num);
}