import { renderList } from "./render";
import { storeLocally } from "./localstorage";

const listArray = JSON.parse(localStorage.getItem('todoList')) || [
    // {
    //     Title: "Clean Room",
    //     Description: "Make bed, dust off floor and surfaces",
    //     Completion: true,
    //     Project: "Completed",
    // },
    // {
    //     Title: "Feed Dogs",
    //     Description: "Chicken",
    //     Completion: false,
    //     Project: "Not Completed",
    // },
];

const getList = () => listArray;

//ADD TODO ITEM TO LIST
function addToList(todoItem) {
    listArray.push(todoItem);
    storeLocally(listArray, 'todoList');
    renderList(getList());
}

//CHANGE COMPLETION STATUS OF TODO
function setStatus(index) {
    listArray[index].Completion = !listArray[index].Completion;
    storeLocally(listArray, 'todoList');
}

//REMOVE TODO FROM ARRAY
function deleteTodoItem(index) {
    listArray.splice(index, 1);
    storeLocally(listArray, 'todoList');
    renderList(getList());
}

export { addToList, getList, setStatus, deleteTodoItem };