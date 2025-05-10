import { renderList } from "./render";

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
    renderList(getList());
}

//CHANGE COMPLETION STATUS OF TODO
function setStatus(index) {
    listArray[index].Completion = !listArray[index].Completion;
    renderList(getList());
}

//REMOVE TODO FROM ARRAY
function deleteTodoItem(index) {
    listArray.splice(index, 1);
    renderList(getList());
}

export { addToList, getList, setStatus, deleteTodoItem };