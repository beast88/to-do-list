import{renderProjectForm} from "./renderProjectForm.js";
import{createProjectController} from "./createProjectController.js";

let projects  = [];

//Create Project
const createProject = document.querySelector('.create-project');

createProject.addEventListener('click', (e) => {
	renderProjectForm();
	createProjectController(projects);

});