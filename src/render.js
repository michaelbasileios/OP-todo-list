function renderList(array) {
    const listContainerDiv = document.querySelector("#list-container");
    array.forEach(item => listContainerDiv.appendChild(generateHTMLElement(item)));
}

function generateHTMLElement(todoListObject) {
    const todoItemCard = document.createElement("div");
    todoItemCard.classList.add('todoItemDiv');
    for (const property in todoListObject) {
        const value = todoListObject[property];
        propertyCheck(property, value, todoItemCard);
    }
    return todoItemCard;
}

//function to check the type of property of a todo item and create appropriate DOM elements
function propertyCheck(property, value, todoItemCard) {
    switch (property) {
        case "Title":
            const titleElement = document.createElement('h2');
            titleElement.textContent = value;
            todoItemCard.appendChild(titleElement);
            break;
        case "Description":
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = value;
            todoItemCard.appendChild(descriptionElement);
            break;
        case "Priority":
            const priorityElement = document.createElement('h3');
            priorityElement.textContent = value;
            todoItemCard.appendChild(priorityElement);
            break;
        case "Completion":
            const completionStatusLabel = document.createElement('label');
            completionStatusLabel.textContent = value ? "Complete" : "Incomplete";
            const completionStatusElement = document.createElement('input');
            completionStatusElement.type = 'checkbox';
            completionStatusElement.name = 'completionStatusCheckbox';
            completionStatusElement.checked = value ? true : false;
            completionStatusLabel.append(completionStatusElement);
            todoItemCard.append(completionStatusLabel);
            break;
        default:
            const defaultElement = document.createElement('div');
            defaultElement.textContent = `${key}: ${value}`;
            todoItemCard.appendChild(defaultElement);
    }
}

export { renderList };