const deleteItemHandler = () => {
	const deleteButtons = document.querySelectorAll('.delete-icon');

	deleteButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			console.log(button.getAttribute('id'))
		});
	});

};

export{deleteItemHandler};