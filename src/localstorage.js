import { getList } from "./list-management";

function storeLocally(array, key) {
    localStorage.setItem(key, JSON.stringify(array));
}

// function retrieveLocally(key) {
//     const retrievedArray = JSON.parse(localStorage.getItem(key));
//     return retrievedArray;
// }

export { storeLocally };