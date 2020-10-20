import{renderProjectForm} from "./renderProjectForm.js"

//Create Project
const createProject = document.querySelector('.create-project');

createProject.addEventListener('click', (e) => {
	console.log('You clicked a button');
	renderProjectForm();
});