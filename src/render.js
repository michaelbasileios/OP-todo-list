function renderList(array) {
    const listContainerDiv = document.querySelector("#list-container");
    array.forEach(item => listContainerDiv.appendChild(generateHTMLElement(item)));
}

function generateHTMLElement(todoListObject) {
    const todoItemCard = document.createElement("div");
    todoItemCard.classList.add('todoItemDiv');
    for (const key in todoListObject) {
        const value = todoListObject[key];

        switch (key) {
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
                const completionStatusElement = document.createElement('h4');
                completionStatusElement.textContent = value ? "Complete" : "Incomplete";
                todoItemCard.appendChild(completionStatusElement);
                break;
            default:
                const defaultElement = document.createElement('div');
                defaultElement.textContent = `${key}: ${value}`;
                todoItemCard.appendChild(defaultElement);
        }
    }
    return todoItemCard;
}

export { renderList };