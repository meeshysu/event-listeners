const toDoInputElem = document.getElementById("toDoInput");
const notesInputElem = document.getElementById("notesInput");

const submitToDoButtonElem = document.getElementById("submitToDoButton");

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);
    
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener("click", () => {
            console.log("they clicked delete!!!");
        })
    }
}


printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <a href="#" class="btn btn-primary deleteButton">Delete This Ugly Shit MEOW</a>
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