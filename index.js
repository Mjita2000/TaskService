//start drop down
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", ()=>{
    optionsContainer.classList.toggle("active");
});


// when we select on any of the options we want the text to be displayed over select category
//and remove the active class from optionscontainer
//add event listener for all options in our list

optionsList.forEach(o =>{
    o.addEventListener("click", ()=>{
        selected.innerHTML=o.querySelector("label").innerHTML;
      //  selValue=selected.innerHTML;
        
    
    optionsContainer.classList.remove("active");
    });
    
});
//end drop down



let submit=document.querySelector(".submit");
let title=document.getElementById("title");
let desc=document.getElementById("desc");
//let select=document.getElementById("select");//
let notesElem=document.querySelector(".tasks1");
let notes=JSON.parse(localStorage.getItem("tasks1"));
if(notes){
    notes.forEach(element=>{
        addNotes(element)
    })
}
console.log(title,desc);
submit.addEventListener("click",(e)=>{
     e.preventDefault();
     addNotes()   
    }) 


function addNotes(obj){
    let titleVal=title.value;
    let descVal=desc.value;
     let selVal=selected.innerHTML;
  //  let selectVal=select.value;//

    if(obj){
        titleVal=obj.title;
        descVal=obj.desc;
        //console.log(descVal);
    //    selectVal=obj.select;//


    }
    //let statusVal=staetus.value;


let card=document.createElement('li');
card.classList.add('task');
card.classList.add('fill');


if(titleVal ){
card.innerHTML=`
<h3>${titleVal }</h3>
            <p>
        ${descVal}
            </p>
            <p>
        ${selVal}
            </p>
            
              <button class="del">Delete</button>
                      

` 
let fr ="mkhomo";
let jj="mkhomo";

let newValae=selVal.trim();

let selectV=newValae.length;
if(selectV===11){
 notesElem.appendChild(card);
 updateLs();}
if(selectV===4){
    notesElem2.appendChild(card);
    updateLs();}
   
if(selectV===5){
        notesElem1.appendChild(card);
        updateLs();}
       
    
}


let clear =card.querySelector(".del");
clear.addEventListener("click",()=>{
    card.remove();
})
}


function updateLs(){

    let card =document.querySelectorAll(".li");
    let arr=[];
    card.forEach(element=>{
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText,
            //select:element.children[2].innerText,
        })
    });
    localStorage.setItem("notes",JSON.stringify(arr));
}
