const body=document.querySelector("body");
const btnSave=document.querySelector(".save").addEventListener("click",save);
let click=0;
// let i=1;
let newText;

//saving item
function save(){
    // click++;
    const key=prompt("Enter the key name");
    const input=document.querySelector("textarea").value;
    // if(click==1){    //THIS IS ONE WAY

    //     localStorage.setItem("todo"+i,input);
    // }
    // else{
    //     i++;
    //     localStorage.setItem("todo"+i,input);
    // }
        localStorage.setItem(key,input);
    document.querySelector("textarea").value="";
}

//clearing item
const btnClear=document.querySelector(".clear").addEventListener("click",clear);
function clear(){
    let val=prompt("Enter which todo do you need to Delete!!");
    localStorage.removeItem(val);
    // const chi=document.querySelector(".newText");
    body.removeChild(newText);
}

//getting saved item
const btnGet=document.querySelector(".get").addEventListener("click",get);
function get(){
    let val=prompt("Enter which todo do you need!!");
    if(typeof localStorage.getItem(val)=="object"){  //if key not exist in local storage so it means its type is object
        alert("No item Exist");
        return;
    }
    newText=document.createElement("textarea");
    newText.textContent=localStorage.getItem(val);
    newText.classList.add("newText");
    body.appendChild(newText);
}

//edit item
const btnedit=document.querySelector(".edit").addEventListener("click",edit);
function edit(){
    let ask=prompt("Enter which key value you want to edit");
    if(typeof localStorage.getItem(ask)=="object"){  //if key not exist in local storage so it means its type is object
        alert("No key Exist");
        return;
    }
    let newVal=prompt("Enter here");
    localStorage.setItem(ask,newVal);


}