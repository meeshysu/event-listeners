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

//.value is to capture information from forms