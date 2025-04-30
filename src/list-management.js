const listArray = [
    {
        Title: "Clean Room",
        Description: "Make bed, dust off floor and surfaces",
        Completion: true,
    },
    {
        Title: "Feed Dogs",
        Description: "Chicken",
        Completion: false,
    },
];

const getList = () => listArray;

//ADD TODO ITEM TO LIST
function addToList(todoItem) {
    listArray.push(todoItem);
}

//CREATE NEW TODO ITEM OBJECT
function newTodoItem(title, description, priority, completion) {
    return {
        title,
        description,
        priority,
        completion
    };
}

export { addToList, getList };