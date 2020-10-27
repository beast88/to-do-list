import{renderProjectForm} from "./renderProjectForm.js";
import{createProjectController} from "./createProjectController.js";

//Handles what happens when the create project button is clicked
const createProjectHandler = (projects) => {
	const createProject = document.querySelector('.create-project');

	createProject.addEventListener('click', (e) => {
		renderProjectForm();
		createProjectController(projects);

	});
};

export{createProjectHandler};