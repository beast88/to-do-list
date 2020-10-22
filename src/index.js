import{renderProjectForm} from "./renderProjectForm.js"
import{createProjectController} from "./createProjectController.js"

//Create Project
const createProject = document.querySelector('.create-project');

let projects  = [];

createProject.addEventListener('click', (e) => {
	console.log('You clicked a button');
	renderProjectForm();
	createProjectController(projects);

});