import { addToList } from "./list-management";
import { getProjectsArray } from "./projects";

const newTodoFormDlg = document.querySelector('#new-todo-form-dlg');
const newTodoFormBtn = document.querySelector('#new-todo-dlg-btn');

const setupDialog = () => {
    newTodoFormBtn.addEventListener('click', () => {
        formDialog();
    })
}

//operate dialog window
const formDialog = (editTodo = null) => {
    // newTodoFormBtn.addEventListener('click', () => {
        newTodoFormDlg.innerHTML = '';
        newTodoFormDlg.append(form(editTodo));
        newTodoFormDlg.showModal();
    }

//create the form and its input elements
const form = (editTodo) => {
    const todoForm = document.createElement('form');
    todoForm.id = 'todo-form';
    todoForm.method = 'dialog';
    
    const formTitleLabel = document.createElement('label');
    formTitleLabel.textContent = 'Title';
    const formTitleInput = document.createElement('input');
    formTitleInput.type = 'text';
    formTitleInput.classList.add('form-input-field');
    formTitleInput.name = 'todo-title';
    formTitleInput.value = editTodo ? editTodo.Title : '';
    formTitleLabel.append(formTitleInput);

    const formDescriptionLabel = document.createElement('label');
    formDescriptionLabel.textContent = 'Description';
    const formDescriptionInput = document.createElement('input');
    formDescriptionInput.type = 'text';
    formDescriptionInput.classList.add('form-input-field');
    formDescriptionInput.name = 'todo-description';
    formDescriptionInput.value = editTodo ? editTodo.Description : '';
    formDescriptionLabel.append(formDescriptionInput);

    const formPriorityLabel = document.createElement('label');
    formPriorityLabel.textContent = 'Priority';
    const formPriorityInput = document.createElement('input');
    formPriorityInput.type = 'number';
    formPriorityInput.classList.add('form-input-field');
    formPriorityInput.name = 'todo-priority';
    formPriorityInput.value = editTodo ? editTodo.Priority : '';
    formPriorityLabel.append(formPriorityInput);

    const formProjectLabel = document.createElement('label');
    formProjectLabel.textContent = 'Project';
    const formProjectInput = document.createElement('select');
    formProjectInput.classList.add('form-input-field');
    formProjectInput.name = 'projects';
    const projectList = getProjectsArray();
    projectList.forEach(project => {
        const projectOption = document.createElement('option');
        projectOption.value = project;
        projectOption.textContent = project;
        formProjectInput.append(projectOption);
    })
    if (editTodo && editTodo.Project) { //in case of editing a todo
        formProjectInput.value = editTodo.Project; //this preselects the matching project
    }
    formProjectLabel.append(formProjectInput);

    const formSubmitBtn = document.createElement('button');
    formSubmitBtn.id = 'submit-btn';
    formSubmitBtn.textContent = 'Done';
    
    const formCancelBtn = document.createElement('button');
    formCancelBtn.type = 'button';
    formCancelBtn.id = 'cancel-btn';
    formCancelBtn.textContent = 'Cancel';
    formCancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newTodoFormDlg.close();
        todoForm.reset();
    })

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (editTodo) {
            editTodo.Title = formTitleInput.value;
            editTodo.Description = formDescriptionInput.value;
            editTodo.Priority = formPriorityInput.value;
            editTodo.Project = formProjectInput.value;
        } else {
            addToList({
            Title: formTitleInput.value,
            Description: formDescriptionInput.value,
            Priority: formPriorityInput.value,
            Completion: false,
            Project: formProjectInput.value, 
        });
        }
        newTodoFormDlg.close();
        todoForm.reset(); 
    })

    todoForm.append(
        formTitleLabel, 
        formDescriptionLabel, 
        formPriorityLabel,
        formProjectLabel, 
        formSubmitBtn,
        formCancelBtn
        );

    return todoForm;
}

// const formElements = () => {
//     // const todoForm = document.createElement('form');
//     // todoForm.id = 'todo-form';
//     // todoForm.method = 'dialog';
    
//     const formTitleLabel = document.createElement('label');
//     formTitleLabel.textContent = 'Title';
//     const formTitleInput = document.createElement('input');
//     formTitleInput.type = 'text';
//     formTitleInput.classList.add('form-input-field');
//     formTitleInput.name = 'todo-title';
//     formTitleLabel.append(formTitleInput);

//     const formDescriptionLabel = document.createElement('label');
//     formDescriptionLabel.textContent = 'Description';
//     const formDescriptionInput = document.createElement('input');
//     formDescriptionInput.type = 'text';
//     formDescriptionInput.classList.add('form-input-field');
//     formDescriptionInput.name = 'todo-description';
//     formDescriptionLabel.append(formDescriptionInput);

//     const formPriorityLabel = document.createElement('label');
//     formPriorityLabel.textContent = 'Priority';
//     const formPriorityInput = document.createElement('input');
//     formPriorityInput.type = 'number';
//     formPriorityInput.classList.add('form-input-field');
//     formPriorityInput.name = 'todo-priority';
//     formPriorityLabel.append(formPriorityInput);

//     const formProjectLabel = document.createElement('label');
//     formProjectLabel.textContent = 'Project';
//     const formProjectInput = document.createElement('select');
//     formProjectInput.classList.add('form-input-field');
//     formProjectInput.name = 'projects';
//     const projectList = getProjectsArray();
//     projectList.forEach(project => {
//         const projectOption = document.createElement('option');
//         projectOption.value = project;
//         projectOption.textContent = project;
//         formProjectInput.append(projectOption);
//     })
//     formProjectLabel.append(formProjectInput);

//     // todoForm.append(
//     //     formTitleLabel, 
//     //     formDescriptionLabel, 
//     //     formPriorityLabel,
//     //     formProjectLabel,
//     //     );

//}
export { setupDialog, formDialog }