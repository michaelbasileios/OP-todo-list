import "./styles.css"
import { getList } from "./list-management";
import { renderList } from "./render";
import { formDialog } from "./form";

renderList(getList());
formDialog();