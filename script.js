let saveButton = document.querySelector(".button");
saveButton.addEventListener("click", saveInput);

// save user's inputed text
function saveInput(event) {
    event.preventDefault();
    let userInputText = userInput();

    // if user write nothing, send error
    if (userInputText == false) {
        alarm('warning');
        return false;
    }

    let list = document.querySelector(".list");

    // ---------------------- create <span> item for deleting items ----------------------:
    let removeItem = createRemoveItem();
    let editItem = createEditItem();

    // ---------------------- create <li> item & append text in it ----------------------:
    let newItem = createLiItem(removeItem, userInputText, list, editItem);


    // ---------------------- Remove item with X ----------------------:
    removeItem.addEventListener("click", removeNoteFromList);

    editItem.addEventListener("click", editNote);


    // ---------------------- check remove checkbox ----------------------:
    checkRemoveCheckbox();

}




// ___---___---___---  Functions ___---___---___---___---___---___---


// ---------------- get user's inputed text --------------------------
function userInput() {
    let textArea = document.querySelector("#note");
    if (textArea.value == "") {
        return false;
    }
    return textArea.value;
}

// ---------------------- create <span> item for deleting items ----------------------:
function createRemoveItem() {

    let span = document.createElement("span");
    span.innerText = "X";
    span.style.color = "red";
    span.style.float = "left";

    return span;
}

// ---------------------- create <li> item ----------------------:

function createLiItem(span, userInputText, list, editItem) {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(userInputText));
    newItem.appendChild(span);
    newItem.appendChild(editItem);

    list.appendChild(newItem);
}

// ---------------------- Remove note from list ----------------------:
function removeNoteFromList(event) {
    event.target.previousSibling.remove();
    event.target.nextSibling.remove();
    event.target.remove();


}

// ---------------------- check remove checkbox ----------------------:
function checkRemoveCheckbox() {
    let checkbox = document.querySelector('[type="checkbox"]');
    if (checkbox.checked == true) {
        document.querySelector("#note").value = "";
    }
}

// ---------------------- create <span> item for editing items ----------------------:
function createEditItem() {

    let span = document.createElement("span");
    span.innerText = "E";
    span.style.color = "green";
    span.style.float = "left";

    return span;
}

// ---------------------- create <span> item for editing items ----------------------:
function editNote() {
    let mainNote = event.target.previousSibling.previousSibling.textContent;
    let textArea = document.querySelector("#note");

    textArea.value = mainNote;

    let saveButton = document.querySelector(".button");
    let editButton = document.querySelector(".edit");

    saveButton.setAttribute("style", "display:none");
    editButton.setAttribute("style", "display:block");

    editButton.addEventListener("click", function(event) {
        event.preventDefault();


        console.log(event);

    });
}

//  -----------------   Alaram to user  ---------------------------
function alarm(status) {
    Swal.fire(
        'Please write something',
        '',
        status
    )
}