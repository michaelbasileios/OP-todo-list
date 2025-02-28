const listArray = [
    {
        Title: "Clean Room",
        Description: "Make bed, dust off floor and surfaces",
        Completion: false,
    },
    {
        Title: "Feed Dogs",
        Description: "Chicken",
        Completion: false,
    },
];

function addToList(todoItem) {
    listArray.push(todoItem);
}

function newTodoItem(title, description, priority, completion) {
    return {
        title,
        description,
        priority,
        completion
    };
}

export { addToList };