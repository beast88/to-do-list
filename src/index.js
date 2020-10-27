import{createProjectHandler} from "./createProjectHandler.js";
import{renderProjects} from "./renderProjects.js";
import{selectedProject} from "./selectedProject.js";
import{projectKey} from "./projectKey.js";

projectKey();
let projects  = JSON.parse(localStorage.getItem(projectKey())) || [];

const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'project.selectedProjectId';
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

renderProjects(projects, selectedProjectId);

selectedProject(selectedProjectId, projects);

createProjectHandler(projects);