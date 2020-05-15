console.log("works");

let sign = "x";
var gameactive = true;

if (gameactive==true){
function printx(number){
   
    let num= document.getElementById("r"+number)
   if (num.innerHTML==""){
    num.innerHTML=sign;
    winner();
    turn();
    checksign();
     } 
   
    // console.log(num);
}}
function turn(){
    if (sign=="x"){
        document.getElementById("turn").innerHTML="O's turn";}
    else
    {
        document.getElementById("turn").innerHTML="X's turn";
    }
    
    // console.log(turn);   
}

function checksign(){
    if(sign=="x"){
    sign="o";}
    else{
    sign="x";}
 
}

function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkmove(a,b,c,m){
    if (getbox(a)==m && getbox(b)==m && getbox(c)==m)
    return true;
    else
    return false;
}

function winner(){
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || checkmove(1,5,9,sign) || checkmove(3,5,7,sign)){
        
        document.getElementById("turn").innerHTML=sign + " wins";
        gameactive=false;
        
        for(let i=1;i<=9;i++){
            document.getElementById("r" + i).innerHTML="";
           
        }throw "end game";  
        
        
    
        
    }
    else if
        (getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""){
        document.getElementById("turn").innerHTML="it's a Tie";
    throw "end game";
    
} 
}


let reset=document.getElementById("btnreset");
reset.addEventListener("click",handelreset);
function handelreset(){
    for(let i=1;i<=9;i++){
        document.getElementById("r" + i).innerHTML="";
     }
     document.getElementById("turn").innerHTML="Let's Play" ;
}

