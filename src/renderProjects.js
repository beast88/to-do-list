import{clearElement} from "./clearElement.js";

const renderProjects = (projects) => {
	const projectList = document.querySelector(".project-list");

	clearElement(projectList);

	projects.forEach(project => {
		const projectNameContainer = document.createElement('div');
		projectNameContainer.setAttribute('class', 'project-name-container');

		const listElement = document.createElement('li');
		listElement.setAttribute('class', 'project-name');
		listElement.innerText = project.name;

		const deleteIcon = document.createElement('i');
		deleteIcon.setAttribute('class', 'fa fa-trash-o');
		deleteIcon.classList.add('delete-icon');
		deleteIcon.setAttribute('id', `${project.id}`);

		projectList.append(projectNameContainer);

		projectNameContainer.append(listElement, deleteIcon);

	});

}

export {renderProjects};