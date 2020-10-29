const createToDo = (name, priority, dueDate, desc) => {
	return {id: Date.now().toString(), name: name, priority: priority, dueDate: dueDate, desc: desc, complete: false}
};

export{createToDo};