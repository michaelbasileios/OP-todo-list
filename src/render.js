function renderList(array) {
    const listContainerDiv = document.querySelector("#list-container");
    
    array.forEach(item => listContainerDiv.appendChild(generateHTMLElement(item)));
}

function generateHTMLElement(todoListObject) {
    todoItemCard = document.createElement("div");
    for (const key in todoListObject) {
        const value = todoListObject[key];

        switch (key) {
            case "title":
                const titleElement = document.createElement('h1');
                titleElement.textContent = value;
                todoItemCard.appendChild(titleElement);
                break;
            case "description":
                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = value;
                todoItemCard.appendChild(descriptionElement);
                break;
            case "priority":
                const priorityElement = document.createElement('h3');
                priorityElement.textContent = value;
                todoItemCard.appendChild(priorityElement);
                break;
            case "completion":
                const completionStatusElement = document.createElement('h3');
                completionStatusElement.textContent = value;
                todoItemCard.appendChild(completionStatusElement);
                break;
            default:
                const defaultElement = document.createElement('div');
                defaultElement.textContent = `${key}: ${value}`;
                todoItemCard.appendChild(defaultElement);
        }
    }
    return { todoItemCard };
}

export { renderList };