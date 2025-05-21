import { getList } from "./list-management";
import { renderList } from "./render";
// import { getProjectsArray } from "./projects";

const sidebarDiv = document.querySelector('#sidebar');

//RENDER AN UNORDERED LIST OF THE ENTIRE PROJECT ARRAY
function renderProjectList(array) {
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    projectList.innerHTML = '';
    array.forEach((item, index) => 
        projectList.appendChild(generateListItem(item, index)));
    sidebarDiv.append(projectList);
}

//GENERATE LIST ITEM FOR EACH PROJECT IN PROJECT ARRAY
function generateListItem(project, index) {
    const projectListItem = document.createElement("li");
    projectListItem.classList.add('project-list-item');
    projectListItem.textContent = project;
    projectListItem.addEventListener('click', () => renderSelectedProject(project));

    return projectListItem;
}

//RENDER ONLY TODO ITEMS IN A SELECTED PROJECT
const renderSelectedProject = (selectProject) => {
    const todoList = getList();
    if (selectProject === "Default") {
        renderList(todoList);
    } else {
    const filteredList = todoList.filter(
        listItem => listItem.Project === selectProject
    );
    console.log(filteredList);
    renderList(filteredList);
    } 
}

export { renderProjectList };