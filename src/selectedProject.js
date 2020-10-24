import{renderProjects} from "./renderProjects.js";
import{saveProject} from "./saveProject.js";

const selectedProject = (selectedProjectId, projects, KEY) => {
	const projectList = document.querySelector('.project-list');

	projectList.addEventListener('click', (e) => {
		if (e.target.tagName.toLowerCase() === 'li') {
			selectedProjectId = e.target.getAttribute('id');
			//saveProject(KEY, projects);
			renderProjects(projects, KEY, selectedProjectId);
		};		
	});
}

export{selectedProject};