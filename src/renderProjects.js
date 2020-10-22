import{clearElement} from "./clearElement.js";

const renderProjects = (projects) => {
	const projectList = document.querySelector(".project-list");

	//need a clear function to clear the parent element whenever a new project is added
	clearElement(projectList);

	projects.forEach(project => {
		const listElement = document.createElement('li');
		listElement.setAttribute('class', 'project-name');
		listElement.innerText = project;
		projectList.append(listElement);
	});

}

export {renderProjects};