const completeCheck = (toDos) => {

	toDos.forEach(toDo => {
		if(toDo.complete === true) {
			const checkbox = document.getElementById(`${toDo.id}`);
			checkbox.classList.add('complete');
		};
	});
};

export{completeCheck};