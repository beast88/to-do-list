import{createProjectHandler} from "./createProjectHandler.js";
import{renderProjects} from "./renderProjects.js";
import{selectedProject} from "./selectedProject.js";
import{projectKey} from "./projectKey.js";

projectKey();
let projects  = JSON.parse(localStorage.getItem(projectKey())) || [];

let selectedProjectId = '';

renderProjects(projects, selectedProjectId);

selectedProject(selectedProjectId, projects);

createProjectHandler(projects);