import{renderProjects} from "./renderProjects.js";
import{createProject} from "./createProject.js";
import{removeForm} from "./removeForm.js";
import{saveProject} from "./saveProject.js";


//Controls what happens once the create project button is clicked
const createProjectController = (projects, KEY) => {
	const projectSubmit = document.querySelector('#project-submit');

	projectSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		var name = document.getElementById('project-name').value;

		if (name === null || name === '') return;

		const project = createProject(name);
		projects.push(project);
		removeForm();
		saveProject(KEY, projects);
		
		renderProjects(projects);
	});

};

export{createProjectController};