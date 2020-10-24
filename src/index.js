import{renderProjectForm} from "./renderProjectForm.js";
import{createProjectController} from "./createProjectController.js";
import{renderProjects} from "./renderProjects.js";

const LOCAL_STORAGE_PROJECT_KEY = 'project.list';
let projects  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

renderProjects(projects);

//Create Project
const createProject = document.querySelector('.create-project');

createProject.addEventListener('click', (e) => {
	renderProjectForm();
	createProjectController(projects, LOCAL_STORAGE_PROJECT_KEY);

});