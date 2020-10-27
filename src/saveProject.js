import{projectKey} from "./projectKey.js";

//Saves the project to local storage

const saveProject = (projects) => {
	localStorage.setItem(projectKey(), JSON.stringify(projects));
};

export {saveProject};