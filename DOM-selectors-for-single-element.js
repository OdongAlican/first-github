// DOM selectors for single element

// these are document object methods that allow us to pull things from the DOM.. it was previously carried out using J-Querry. but we intend to use vanilla Javascript since its much easier to work with
// jquerry has an advantage of quick simple plug-ins and scripts used to perform a specific action but is not recommended for DOM
// in vanilla javascript, the selectors are categorised into two different types ie. single element and multiple element selectors.
// single element selectors allow you to grad one element by its id or its class,etc and it only stores one thing.. so if there are more than one class in a DOM, it will just grad the first one. multiple element selector will grad all those elements with that class and will return an HTML collection or a node list depending on which selector you use.



// THE TWO SINGLE ELEMENT SELECTORS. 

// first one is get element by ID

//document.getElementByID()

console.log(document.getElementById('task title')); // this prints out the particular element/H-tag with that ID e.g <h1 id="task title"></h1>

//Get things from the element.
console.log(document.getElementById('task title').id); // this prints out the actual name of the id e.g task title for our case
console.log(document.getElementById('task title').className); // this prints the name of the class for that particular id if it exists

// if we include class  <h1 id="task title" class="test"></h1> in the HTML. this will print class test

//change styling

document.getElementById('task title').style.background = 'black'; // this changes the particular background of the element
document.getElementById('task title').style.color = 'fff'; //changes the text of the element to white
document.getElementById('task title').style.padding = '5px'; // changes the element padding by 5px


// change content

document.getElementById('task title').textContent= 'Task list'; // changes the text content to task list
document.getElementById('task title').innerText = 'Task listing'; // changes the text content to task listing
document.getElementById('task title').innerHTML = '<span style="color:red">Task Big List</span>'; // changes the text content to Task Big List and gives it a red color


// instead of using the long "document.getElementById('task title')", we can equate it to a variable and use it as below

const takTitle = document.getElementById('task title');

takTitle.textContent= 'Task list'; // changes the text content to task list
takTitle.innerText = 'Task listing'; // changes the text content to task listing
takTitle.innerHTML = '<span style="color:red">Task Big List</span>'; // changes the text content to Task Big List and gives it a red color

//document.querrySelector().. this is much more powerful because we do not have to select elements only by id, we can select them by anything
// basical it works like jquerry and you can put any CSS selector in here

console.log(document.querySelector('#task-title')); // gets the element by id task-title
console.log(document.querySelector('.Card Title')); // gets the element by class card title
console.log(document.querySelector('h5')); // gets the h5 element. if there are more than one h5 elements, it just gets the first one.

//styling using querrySelector()

document.querySelector('li').style='red'; // this will change the color of the first element in the list to red
document.querySelector('li:last-child').style.color = 'blue'; // this will change the color of the last element in the list to blue
document.querySelector('li:nth-child(3)').style.color = 'green'; //this will change the color of the third element in the list to green
document.querySelector('li:nth-child(2)').style.color = 'violet'; // this will change the color of the second element in the list to violet

document.querySelector('li:nth-child(6)').textContent= 'Boostrap'; // changes the text content of the 6th li element to Boostrap
document.querySelector('li:nth-child(7)').innerHTML = '<span style="color:orange"> Alien Invasion</span>';//this changes the text content of the 7th li element to Alien Invasion and changes the color to orange


// odd and even using the nth child of css

document.querySelector('li:nth-child(odd)').style.color = 'red'; // this will change only the color of the first odd element instead of changing all the odd numbers.. this is because its a single element selector
document.querySelector('li:nth-child(even)').style.color = 'red'; // this will change only the color of the first even element instead of changing all the even numbers.. this is because its a single element selector