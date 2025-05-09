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

export { addToList, getList };