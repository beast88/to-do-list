const renderComplete = (checkbox, toDo) => {
	const siblings = checkbox.parentNode.childNodes;

	siblings.forEach(sibling => {
		if(sibling.textContent === toDo.name && toDo.complete === true) {
			sibling.classList.add('name-complete');
		} else {
			sibling.classList.remove('name-complete');
		};

		if (sibling.classList.contains(toDo.priority) == true && toDo.complete === true){
			sibling.classList.add('priority-complete');
		} else {
			sibling.classList.remove('priority-complete');
		};

	});

	console.log(siblings);
};

export{renderComplete};