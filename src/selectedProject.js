import{renderProjects} from "./renderProjects.js";
import{saveProject} from "./saveProject.js";

//Selects the project the user has clicked on and reruns the render page
const selectedProject = (selectedProjectId, projects, KEY) => {
	const projectList = document.querySelector('.project-list');

	projectList.addEventListener('click', (e) => {
		if (e.target.tagName.toLowerCase() === 'li') {
			selectedProjectId = e.target.getAttribute('id');
			renderProjects(projects, KEY, selectedProjectId);
		};		
	});
}

export{selectedProject};