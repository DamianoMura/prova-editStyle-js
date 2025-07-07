console.log(document.getElementsByClassName("box"));
console.log("for each box : ");
//console.log(document.getElementsByClassName("box").length)
function swapColors(){
for(let x=0 ; x<document.getElementsByClassName("box").length ; x++){
  let dump="";
  console.log(x)
  console.log("the actual property initially is--> document.getElementsByClassName('box').item("+x+").className = "+document.getElementsByClassName("box").item(x).className)
  if(document.getElementsByClassName("box").item(x).classList[1]=="bg-success"){
    
    dump=document.getElementsByClassName("box").item(x).className;
    dump=dump.replace("bg-success","bg-danger");
   
  }
  else{
    dump=document.getElementsByClassName("box").item(x).className;
    dump=dump.replace("bg-danger","bg-success")
   
  }
  document.getElementsByClassName("box").item(x).className=dump;
  console.log("swapping the class name with a string method: replace will become --> document.getElementsByClassName('box').item("+x+").className = "+document.getElementsByClassName("box").item(x).className)
}

}