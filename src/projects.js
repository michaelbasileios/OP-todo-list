import { renderProjectList } from "./projects-render";

const projectsArray = ["Default", "Completed", "Not Completed"];

const getProjectsArray = () => projectsArray;

function createNewProject(newProject) {
    projectsArray.push(newProject);
    renderProjectList(getProjectsArray());
}

export { getProjectsArray };