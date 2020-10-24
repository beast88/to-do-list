import{renderProjectForm} from "./renderProjectForm.js";
import{createProjectController} from "./createProjectController.js";
import{renderProjects} from "./renderProjects.js";

let projects  = [];

renderProjects(projects)

//Create Project
const createProject = document.querySelector('.create-project');

createProject.addEventListener('click', (e) => {
	renderProjectForm();
	createProjectController(projects);

});