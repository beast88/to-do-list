
//Save user input as and object
const createProject = (name) => {
	return { id: Date.now().toString(), name: name, tasks: []}
};

export {createProject};