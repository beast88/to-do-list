import{createProjectHandler} from "./createProjectHandler.js";
import{renderProjects} from "./renderProjects.js";
import{selectedProject} from "./selectedProject.js";

const LOCAL_STORAGE_PROJECT_KEY = 'project.list';
let projects  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'project.selectedProjectId';
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

renderProjects(projects, LOCAL_STORAGE_PROJECT_KEY, selectedProjectId);

selectedProject(selectedProjectId, projects, LOCAL_STORAGE_PROJECT_KEY);

createProjectHandler(projects, LOCAL_STORAGE_PROJECT_KEY);