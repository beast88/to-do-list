const saveProject = (KEY, projects) => {
	localStorage.setItem(KEY, JSON.stringify(projects));
};

export {saveProject};