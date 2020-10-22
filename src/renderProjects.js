import{clearElement} from "./clearElement.js";

const renderProjects = (projects) => {
	const projectList = document.querySelector(".project-list");

	clearElement(projectList);

	projects.forEach(project => {
		const listElement = document.createElement('li');
		listElement.setAttribute('class', 'project-name');
		listElement.innerText = project;
		projectList.append(listElement);
	});

}

export {renderProjects};