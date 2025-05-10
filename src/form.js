import { addToList as submitForm } from "./list-management";

const newTodoFormDlg = document.querySelector('#new-todo-form-dlg');
const newTodoFormBtn = document.querySelector('#new-todo-dlg-btn');

//operate dialog window
const formDialog = () => {
    newTodoFormDlg.append(formElements());
    newTodoFormBtn.addEventListener('click', () => {
        newTodoFormDlg.showModal();
    })
}

//create the form and its input elements
const formElements = () => {
    const todoForm = document.createElement('form');
    todoForm.id = 'todo-form';
    todoForm.method = 'dialog';
    
    const formTitleLabel = document.createElement('label');
    formTitleLabel.textContent = 'Title';
    const formTitleInput = document.createElement('input');
    formTitleInput.type = 'text';
    formTitleInput.classList = 'form-input-field';
    formTitleInput.name = 'todo-title';
    formTitleLabel.append(formTitleInput);

    const formDescriptionLabel = document.createElement('label');
    formDescriptionLabel.textContent = 'Description';
    const formDescriptionInput = document.createElement('input');
    formDescriptionInput.type = 'text';
    formDescriptionInput.classList = 'form-input-field';
    formDescriptionInput.name = 'todo-description';
    formDescriptionLabel.append(formDescriptionInput);

    const formPriorityLabel = document.createElement('label');
    formPriorityLabel.textContent = 'Priority';
    const formPriorityInput = document.createElement('input');
    formPriorityInput.type = 'number';
    formPriorityInput.classList = 'form-input-field';
    formPriorityInput.name = 'todo-priority';
    formPriorityLabel.append(formPriorityInput);

    // const formCompletionLabel = document.createElement('label');
    // formCompletionLabel.textContent = 'Completed';
    // const formCompletionCheckbox = document.createElement('input');
    // formCompletionCheckbox.type = 'checkbox';
    // formCompletionCheckbox.classList = 'form-input-field';
    // formCompletionCheckbox.name = 'todo-complete-status';
    // formCompletionLabel.append(formCompletionCheckbox);

    const formSubmitBtn = document.createElement('button');
    formSubmitBtn.id = 'submit-btn';
    formSubmitBtn.textContent = 'Done';
    
    const formCancelBtn = document.createElement('button');
    formCancelBtn.id = 'cancel-btn';
    formCancelBtn.textContent = 'Cancel';
    formCancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newTodoFormDlg.close();
        todoForm.reset();
    })

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm({
            Title: formTitleInput.value,
            Description: formDescriptionInput.value,
            Priority: formPriorityInput.value,
            // Completion: formCompletionCheckbox.checked, 
        });
        newTodoFormDlg.close();
        todoForm.reset(); 
    })

    todoForm.append(
        formTitleLabel, 
        formDescriptionLabel, 
        formPriorityLabel, 
        // formCompletionLabel,
        formSubmitBtn,
        formCancelBtn
        );

    return todoForm;
}

export { formDialog }