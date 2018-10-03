const btn = document.querySelector('form');
const taskInput = document.getElementById('walk');

const heading = document.querySelector('h1');

const select = document.querySelector('select');

//btn.addEventListener('submit', onclick);


//Clear input
taskInput.value=''; // this will remove a value that is in the form in an html
                    // you could also easily remove it from the html
                    // for example if you want to submit a form, you want the text field to clear out

//btn.addEventListener('submit',onclick)

//key down
/* taskInput.addEventListener('keydown',onclick);

function onclick(e){
    console.log(`${e.type}`); // including action="index.php" will redirect the page.. thats the default behaviour of a form.. just like for the link the default behaviour is to redirect to that href
    
    //Get input value
   // console.log(taskInput.value); // this will get the value assinged to the form submit and print it
   
   console.log(e.target.value); // we use target because its the actual thing that the event happens for this case its the input on which ones type
   // e.preventDefault(); // this will stop that redirecting behaviour from happening.. when you are using submit you will require e.preventDefault
//heading.innerText = e.target.value; 
 */


//}   

/* // keydown
taskInput.addEventListener('keyup',onclick);

function onclick(e){

    console.log(`THE TYPE IS: ${e.type}`);
    console.log(e.target.value);
} */

//key Press

/* taskInput.addEventListener('keypress',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`);
    console.log(e.target.value);
} */

/* //key Focus

taskInput.addEventListener('focus',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type after clicking at the input.. that is changing the focus at the input
   
}

taskInput.addEventListener('focus',onclick); */




/* 
//blur  its the opposite of focus

taskInput.addEventListener('blur',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type after clicking out of the input.. that is changing focus from the input
   
} */




/* //cut

taskInput.addEventListener('cut',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type cut after cutting from the input.. this will fire up even if you use ctrl x or simply right clicking and chosing cut
}
 */

/* //paste

taskInput.addEventListener('paste',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type paste after pasting in the input.. this will fire up even if you use ctrl z or simply right clicking and chosing paste
} */


/* // input
taskInput.addEventListener('input',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type paste after typing,pasting and cutting from the input. anything we do with the input is going to fire of with this input type
} */

// change.. this works with select
select.addEventListener('change',onclick);

function onclick(e){
    console.log(`THE TYPE IS: ${e.type}`); // simply prints out the type after changing the selected value
    console.log(e.target.value);
}
