const formDialog = () => {
    const newTodoForm = document.querySelector('#new-todo-form');
    const newTodoFormBtn = document.querySelector('#new-todo-dlg-btn');
    newTodoForm.append(formElements());
    newTodoFormBtn.addEventListener('click', () => {
        newTodoForm.showModal();
    })
}

const formElements = () => {
    const todoForm = document.createElement('form');
    todoForm.id = 'todo-form';
    todoForm.method = 'dialog';
    
    const formTitleLabel = document.createElement('label');
    const formTitleInput = document.createElement('input');
    formTitleInput.type = 'text';
    formTitleInput.classList = 'form-input-field';
    formTitleInput.name = 'todo-title';
    formTitleLabel.append(formTitleInput);

    const formDescriptionLabel = document.createElement('label');
    const formDescriptionInput = document.createElement('input');
    formDescriptionInput.type = 'text';
    formDescriptionInput.classList = 'form-input-field';
    formDescriptionInput.name = 'todo-description';
    formDescriptionLabel.append(formDescriptionInput);

    const formPriorityLabel = document.createElement('label');
    const formPriorityInput = document.createElement('input');
    formPriorityInput.type = 'number';
    formPriorityInput.classList = 'form-input-field';
    formPriorityInput.name = 'todo-priority';
    formPriorityLabel.append(formPriorityInput);

    const formCompletionLabel = document.createElement('label');
    const formCompletionCheckbox = document.createElement('input');
    formCompletionCheckbox.type = 'checkbox';
    formCompletionCheckbox.classList = 'form-input-field';
    formCompletionCheckbox.name = 'todo-complete-status';
    formCompletionLabel.append(formCompletionCheckbox);

    const formSubmitBtn = document.createElement('button');
    formSubmitBtn.id = 'submit-btn';
    formSubmitBtn.textContent = 'Done';
    
    const formCancelBtn = document.createElement('button');
    formCancelBtn.id = 'cancel-btn';
    formCancelBtn.textContent = 'Cancel';

    todoForm.append(
        formTitleLabel, 
        formDescriptionLabel, 
        formPriorityLabel, 
        formCompletionLabel,
        formSubmitBtn,
        formCancelBtn
        );

    return todoForm;
}

export { formDialog }