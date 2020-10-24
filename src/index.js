import{createProjectHandler} from "./createProjectHandler.js";
import{renderProjects} from "./renderProjects.js";

const LOCAL_STORAGE_PROJECT_KEY = 'project.list';
let projects  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

renderProjects(projects, LOCAL_STORAGE_PROJECT_KEY);

createProjectHandler(projects, LOCAL_STORAGE_PROJECT_KEY);