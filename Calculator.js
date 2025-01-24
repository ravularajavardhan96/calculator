let items = document.querySelectorAll(".grid-item");
let search = document.querySelector("#search");
let equal = document.querySelector("#evaluate");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let abs = document.querySelector("#abs");
let factorial =document.querySelector("#fact");
let log=document.querySelector("#log");
let ln = document.querySelector("#ln");
let negate = document.querySelector("#negate");
let sq = document.querySelector("#sq");
let sqrt = document.querySelector("#sqrt");
let pow = document.querySelector("#pow");
console.log(search.innerText);
let input = [];
let temp=[];
let inp="";
for (item of items){
    // console.log(item.innerText);
    if(item.innerText =="Pi" || item.innerText=="e" || item.innerText=="exp" || item.innerText=="x^2"|| item.innerText=="1/x"||item.innerText=="x^y" || item.innerText=="10^x"){
        // console.log(this);
        
        item.addEventListener("click",function(){
            inp=inp+this.value;
            search.value=search.value+this.value;
            input.push(inp);
            temp.push(search.value);
            console.log(input);
            console.log(temp);
     
        
            
        });
    }
    else if(item.innerText=="sqrt"  || item.innerText=="mod"){
        item.addEventListener("click",function(){
           inp=inp+this.value;
           search.value=search.value+this.innerText;
           input.push(inp);
            temp.push(search.value);
            console.log(input);
            console.log(temp);
    
        
            
        });

    }
    else{
    item.addEventListener("click",function(){
        console.log(this.innerText);
        inp=inp+this.innerText;
           search.value=search.value+this.innerText;
           input.push(inp);
            temp.push(search.value);
            console.log(input);
            console.log(temp);
    
    
        
    });
   }
}


equal.addEventListener("click",()=>{
    if(search.value==''){
        search.value='';
    }
    else{
    
    search.value=eval(inp);
    console.log(inp);
    
    temp=[];
    input=[];
    input.push(inp);
            temp.push(search.value);
            
            console.log(input);
            console.log(temp);
    }
})
clear.addEventListener("click",()=>{
    search.value="";
    inp="";
    input=[];
    temp=[];
});
del.addEventListener("click",function(){
    // inp.pop();
    // search.value= temp.pop();
    if(temp.length==1){
        search.value="";
        // input.pop();
        // temp.pop();
        temp=[];
        input=[];
        inp="";

    }
    else{
    input.pop();
    temp.pop();
    // search.value="";
    // for(let i=0;i<temp.length;i++) {
    //     search.value=search.value+temp;
    // }
    console.log(temp);
    search.value=temp[temp.length-1];
    inp=input[input.length-1];
    // inp="";
    // for(let i=0;i<input.length;i++) {
    //     search.value=search.value+input[i];
    // }
    // inp=inp.slice(0,inp.length-1);
    // input.pop();
    // temp.pop();
    // console.log(input);
    //         console.log(temp);
    }
    
})



    
let fact=(num)=> {
    let mul=1;
    for(let i=num;i>0;i--){
        mul=mul*i;

    }
    console.log(mul);
    return mul;
}

factorial.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        search.value=fact(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})


log.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        search.value=logarithm(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let logarithm=(num)=> {
    return Math.log10(num);
}


ln.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        search.value=logBase_2(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let logBase_2=(num)=> {
    return Math.log(num);
}

negate.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        search.value=negateFunc(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let negateFunc = (num)=>{
   return num*-1;
}
abs.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        // let a=search.value;
        search.value=absFunc(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let absFunc = (num)=>{
    if(num<0){
        num=num*-1;
    }
   return num;
}


sq.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        // let a=search.value;
        search.value=sqFunc(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let sqFunc = (num)=>{
   num=num*num;
   return num;
}

sqrt.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        // let a=search.value;
        search.value=sqrtFunc(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let sqrtFunc = (num)=>{
   num=num**(1/2);
   return num;
}

pow.addEventListener("click",function(){
    if(search.value==''){
        search.value=""
    }else{
        // let a=search.value;
        search.value=powFunc(eval(search.value));
        input=[];
        temp=[];
        inp="";
        inp=search.value;
        input.push(search.value);
        temp.push(search.value);
        console.log(input,temp);
    }
})

let powFunc = (num)=>{
   num=10**num;
   return num;
}





