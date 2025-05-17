import { getProjectsArray } from "./projects";

const sidebarDiv = document.querySelector('#sidebar');

function renderProjectList(array) {
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
    projectList.innerHTML = '';
    sidebarDiv.append(projectList);
    array.forEach((item, index) => 
        sidebarDiv.appendChild(generateListItem(item, index)));
}



function generateListItem(project, index) {
    const projectListItem = document.createElement("li");
    projectListItem.classList.add('project-list-item');
    projectListItem.textContent = project;

    return projectListItem;
}

export { renderProjectList };