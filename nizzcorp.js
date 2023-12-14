

function gridStructure(row, column) {
    
    const gridContainer = document.getElementById("container")
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const gridElement = document.createElement('div')
            gridElement.id=`item_${i}_${j}`;
            gridElement.className = "gridelement";
            
            gridContainer.appendChild(gridElement);
        }
    }
    
    const Button=document.createElement("button")
    Button.textContent="Drag it"
    Button.id="buttonn"
    Button.setAttribute('draggable', true);
    Button.addEventListener("dragstart",(e)=>{
       
        e.dataTransfer.setData("id",e.target.id)
       
    })
    gridContainer.querySelector('#item_0_0').appendChild(Button)
  
}
gridStructure(10, 10)


const dragContainer=document.getElementById("container")
dragContainer.addEventListener("dragover",(e)=>{
  
    e.preventDefault()
  
  
})

dragContainer.addEventListener("drop",(e)=>{

     e.preventDefault()
     const dragButonId=e.dataTransfer.getData("id")
     const TheDragButton=document.getElementById(dragButonId)
     const targett=e.target;
     console.log("tarrrrrget",targett)
     if(targett.className==="gridelement"){
      targett.appendChild(TheDragButton)}

})












