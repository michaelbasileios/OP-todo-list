import "./styles.css"
import { getList } from "./list-management";
import { renderList } from "./render";
import { setupDialog } from "./form";
import { getProjectsArray } from "./projects";
import { renderProjectList } from "./projects-render";

renderList(getList());
renderProjectList(getProjectsArray());
setupDialog();