import{clearElement} from "./clearElement.js";
import{deleteItemHandler} from "./deleteItemHandler.js";
import{renderToDoContainer} from "./renderToDoList.js";

//Render the list of projects on the page
const renderProjects = (projects, selectedProjectId) => {
	const projectList = document.querySelector(".project-list");

	clearElement(projectList);

	projects.forEach(project => {
		const projectNameContainer = document.createElement('div');
		projectNameContainer.setAttribute('class', 'project-name-container');

		const listElement = document.createElement('li');
		listElement.setAttribute('class', 'project-name');
		listElement.setAttribute('id', `${project.id}`);
		listElement.innerText = project.name;

		if (project.id === selectedProjectId) {
			listElement.classList.add('active-project');
			renderToDoContainer(project, projects);
		};

		const deleteIcon = document.createElement('i');
		deleteIcon.setAttribute('class', 'fa fa-trash-o');
		deleteIcon.classList.add('delete-icon');
		deleteIcon.setAttribute('id', `${project.id}`);

		projectList.append(projectNameContainer);

		projectNameContainer.append(listElement, deleteIcon);

	});

	deleteItemHandler(projects);

}

export {renderProjects};