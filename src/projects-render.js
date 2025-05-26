import { getList } from "./list-management";
import { setProject } from "./projects";
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
    projectListItem.addEventListener('click', () => {
        setProject(project);
        renderList(getList());
    });

    return projectListItem;
}

export { renderProjectList };