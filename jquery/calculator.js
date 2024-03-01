let buttons =$(".button");
let display=$("#display");

buttons.forEach(key=>{
    key.addEventListener("click",(event)=>{
        let keyValue=event.target.textContent;
        display.value += keyValue;
    })
})

function findresult(){
    let result = eval(display.value);
    display.value = result;
}