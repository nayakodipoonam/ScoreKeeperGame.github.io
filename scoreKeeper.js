let one =document.querySelector('#one');
let two =document.querySelector('#two');
let value1=0;
let value2=0;
let target=document.querySelector('#target');
let limit=0;
let reset=document.querySelector('#reset');


one.addEventListener('click',function(){
    let score1=document.querySelector('#score1');
    let score2=document.querySelector('#score2');
    let num1=parseInt(score1.innerText);
    let num2=parseInt(score2.innerText);
    
    if(limit<target.value){
    value1++;
    limit++;
    }
    else{
        if(num1>num2){
            score1.style.color="green";
            score2.style.color="red";
        }
        else{
            score2.style.color="green";
            score1.style.color="red";
            
        }
    }
    score1.innerText=`${value1}`;

    
})
two.addEventListener('click',function(){
    let score1=document.querySelector('#score1');
    let score2=document.querySelector('#score2');
    let num1=parseInt(score1.innerText);
    let num2=parseInt(score2.innerText);
    
    
    if(limit<target.value){
        value2++;
        limit++;
        }
        else{
            if(num1>num2){
                score1.style.color="green";
                score2.style.color="red";
            }
            else{
                score2.style.color="green";
                score1.style.color="red";
                
            }
        }
        
    score2.innerText=`${value2}`;
    
    
})

reset.addEventListener('click', function(){
    let score1=document.querySelector('#score1');
    let score2=document.querySelector('#score2');
    score1.innerText=`${0}`;
    score2.innerText=`${0}`;
    score1.style.color="black";
    score2.style.color="black";
    value1=0;
    value2=0;
    limit=0;
})

