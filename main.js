const toDoInputElem = document.getElementById("toDoInput");
const notesInputElem = document.getElementById("notesInput");

const submitToDoButtonElem = document.getElementById("submitToDoButton");

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);
    
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            //card that the button was on
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
            //.parentNode gives you the immediate parent 
            //since it's a dom element you can use .remove() which takes it off the dom
            
        })
    }
}
//you can also use the query body click listening function ('it is in the night class sources for event listener notes) instead of the for loop. use an 'if' statement. listen to this and 'if' you hear the click, delete this. 
//if (event.target.classList.contains('deleteButton'))

printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}


/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/
function handleHeaderMouseOver (event) {
    outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
    outputEl.innerHTML = "Why u leave me?"
}

const header = document.getElementById("page-header");
/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */
header.addEventListener("mouseover", handleHeaderMouseOver)
header.addEventListener("mouseout", handleHeaderMouseOut)



/*
    We can also write an anonymous function (lamba expression)
    in the addEventListener declaration instead of using a
    function reference.
 */
var fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", function (e) {
    outputEl.innerHTML = e.target.value
})


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
var guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
    <h5 class="card title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <a href="#" class="btn btn-info deleteButton">Delete This Ugly Shit MEOW</a>
     </div>
  </div>`;
    printToDom(domString, "toDooCards");
    activateDeletes();
}

submitToDoButtonElem.addEventListener("click", (e) => {
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});


  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function(event) {
    

    if (event.target.classList.contains('article-selection')) {
        // poke();
        alert("You clicked on the body of the DOM")
    }
})



const myFriendsElems = document.getElementsByClassName('friends');
for (let i = 0; i <  myFriendsElems.length; i++) {
    const element = myFriendsElems[i];

    element.addEventListener('click', poke);
}

//.value is to capture information from forms

