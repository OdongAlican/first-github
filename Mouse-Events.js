let clearBtn = document.querySelector('.clear-task');
let addTask = document.querySelector('#add-task');


//double click
/*  clearBtn.addEventListener('mouseenter', onclick);

function onclick(e){
   console.log(`TYPE IS ${e.type}`); // thos prints the type on double click
  
} 
 */
/* //mouse down
 clearBtn.addEventListener('mouseenter', onclick);

function onclick(e){
   console.log(`TYPE IS ${e.type}`); // this prints when you click and hold the mouse
  
} 
 */

/*  //mouseup
 clearBtn.addEventListener('mouseenter', onclick);

function onclick(e){
   console.log(`TYPE IS ${e.type}`); // this prints when you click and leave the mouse
  
} 
 */

 // mouseenter and mouse leave
/*  clearBtn.addEventListener('mouseenter', onclick);
 clearBtn.addEventListener('mouseleave', onclick); 

function onclick(e){
   console.log(`TYPE IS ${e.type}`); // this prints when you simply drag the mouse over the enter button and print mouse leave when you leave the btn
  
}  */

/* // mouseover and mouseout
clearBtn.addEventListener('mouseover', onclick);
clearBtn.addEventListener('mouseout', onclick); 

function onclick(e){
  console.log(`TYPE IS ${e.type}`); //this operates like mouseeneter and mouseleave.. although mouseenter and mouseleave all works better for a div consiting of multiple elements.. it will only print when you leave and enter that div
                                    // mouseover and mouseout will print each time you enter and leave every element in the div
 
} 
 */
   //change the color of the button to violet
  
 
/*    clearBtn.addEventListener('click',onclick);

 function onclick(e){
    clearBtn.innerHTML= '<span style="color:green"> NEW TASK </span>';
  
 }  */
 

 /* //mousemove
 const card = document.querySelector('.card');

 card.addEventListener('mousemove',onclick);

 function onclick(e){

    console.log(`THE TYPE is: ${e.type}`) // this will print mouse move every time you move the mouse within the element
 } */


 //Event Handler.. it helps to know the position of a character . this is mainly use in games where you control the position of a character using a mouse

 let heading = document.querySelector('h1')
 clearBtn.addEventListener('mousemove',onclick);

 function onclick(e){
   heading.textContent=`MouseX:${e.offsetX}, MouseY:${e.offsetY}`;
   //document.body.style.Color = `rgb(${e.offsetY}, ${e.offsetX,40})`;
  
 } 
 