import { deleteTodoItem, getList } from "./list-management";
import { setStatus } from "./list-management";
import { getSelectedProject } from "./projects";
import { formDialog } from "./form";

//RENDER ARRAY OF TODOS ON PAGE
function renderList(array) {
    const listContainerDiv = document.querySelector("#list-container");
    listContainerDiv.innerHTML = '';
    const selectedProject = getSelectedProject();
    array.forEach((item, index) => { //following code only renders todo items that match the selected project
        if (selectedProject === "Default") {
            listContainerDiv.appendChild(generateHTMLElement(item, index));
        } else if (item.Project === selectedProject){
            listContainerDiv.appendChild(generateHTMLElement(item, index));
        }
    });
}

//GENERATE DOM ELEMENTS FOR EACH TODO ITEM
function generateHTMLElement(todoListObject, index) {
    const todoItemCard = document.createElement("div");
    todoItemCard.classList.add('todoItemDiv');
    for (const property in todoListObject) {
        const value = todoListObject[property];
        propertyCheck(property, value, todoItemCard);
    }

    const completionStatusLabel = document.createElement('label');
    completionStatusLabel.textContent = 'Completed';
    const compStatusCheckbox = document.createElement('input');
    compStatusCheckbox.type = 'checkbox';
    compStatusCheckbox.classList = 'todo-status-checkbox';
    compStatusCheckbox.name = 'todo-complete-status';
    compStatusCheckbox.addEventListener('change', () => {
        setStatus(index);
    })
    completionStatusLabel.append(compStatusCheckbox);
    
    const editTodoBtn = document.createElement('button');
    editTodoBtn.textContent = 'Edit';
    editTodoBtn.classList.add('edit-todo-btn');
    editTodoBtn.addEventListener('click', () => {
        formDialog(getList()[index]);
    });

    const deleteTodoItemBtn = document.createElement('button');
    deleteTodoItemBtn.textContent = 'X'
    deleteTodoItemBtn.classList.add('delete-todo-btn');
    deleteTodoItemBtn.addEventListener('click', () => {
        deleteTodoItem(index);
    })
    
    todoItemCard.append(completionStatusLabel, editTodoBtn, deleteTodoItemBtn);
    
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
        //     const compStatusCheckbox = document.querySelector('.todo-status-checkbox');
        //     completionStatusLabel.textContent = value ? "Complete" : "Incomplete";
        //     const completionStatusElement = document.createElement('input');
        //     completionStatusElement.type = 'checkbox';
        //     completionStatusElement.name = 'completion-status-checkbox';
        //     compStatusCheckbox.checked = value;
        //     completionStatusLabel.append(completionStatusElement);
        //     todoItemCard.append(completionStatusLabel);
        //     break;
        // default:
        //     const defaultElement = document.createElement('div');
        //     defaultElement.textContent = `${property}: ${value}`;
        //     todoItemCard.appendChild(defaultElement);
    }
}

export { renderList };