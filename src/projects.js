import { renderProjectList } from "./projects-render";

const projectsArray = ["Default", "Completed", "Not Completed",];

let selectedProject = 'Default';

//CHANGE SELECTED PROJECT
function setProject(selection) {
    selectedProject = selection;
}

const getProjectsArray = () => projectsArray;
const getSelectedProject = () => selectedProject;

function createNewProject(newProject) {
    projectsArray.push(newProject);
    console.log(projectsArray);
    renderProjectList(getProjectsArray());
}

export { getProjectsArray, setProject, getSelectedProject, createNewProject };