function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const numDisplay = document.getElementById("randomNumber");
    // Clear previous and set new text directly
    numDisplay.textContent = 'Random Number: ' + randomNumber;
}

function addItem() {
    const itemList = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem);
}

function removeItem() {
    const itemList = document.getElementById("itemList");
    if (itemList.children.length > 0) {
        // Removes the very last list item added
        itemList.removeChild(itemList.lastElementChild);
    }
}