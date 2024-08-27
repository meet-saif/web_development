/*
let btn1=document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log("Button was clicked ");//
    console.log(e);// all about this
    console.log(e.type);//it is click able important
    console.log(e.target);// prnt html code important
    console.log(e.clientX,e.clientY)//position at x,y-axes
};
let div=document.querySelector("div");
div.onclick=()=>{
    console.log("Your in div");
}
    */

//EventListener=>best way of venent handler
//node.addEventListener(event,callback)=>to add 
/*btn1.addEventListener("click",()=>{
    console.log("butten was click");//print both  
});
btn1.addEventListener("click",(evt)=>{
console.log("Button was clicked - handler2");
console.log(evt.type);
})
*/
//node.removeEventListener(event,callback)=>to remove
//Note :The callback referce should be same to remove
//prectice of event handler
//Q=> create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again?
let modeBtn=document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click", ()=>{
    // console.log("tang q kar raha ha bhosari ka ")
    if(currMode==="light"){
        currMode="dark";
      document.querySelector("body").style.backgroundColor="yellow";
    }
    else if (currMode === "dark") {
        currMode = "blue";
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelector("body").style.color = "yellow";
    } 
    else if (currMode === "blue") {
        currMode = "green";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector("body").style.color = "black";
    } 
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="yellow";
    }
    console.log(currMode);
});
// let modeBtn=document.createElement("#mode");
// let currMode="light";
// modeBtn.addEventListener("click", ()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="green";
//     }
//     else{
//         currMode="rong";
//         document.querySelector("body").style.backgroundColor="yellow";
//     }
// })



























