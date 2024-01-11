
const createPElement=()=>
{
    debugger;
   let createNewPComponent= document.createElement("p");
   let text=document.createTextNode("Hello");
   createNewPComponent.appendChild(text);
   document.body.appendChild(createNewPComponent);
}

export  function createHElement()
{
    debugger;
   let createNewPComponent= document.createElement("H1");
   let text=document.createTextNode("Hello");
   createNewPComponent.appendChild(text);
   document.body.appendChild(createNewPComponent);
}