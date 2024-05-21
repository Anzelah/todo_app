const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
const myUl = document.querySelector('ul');

/* Load existing list or create one if none */
const existingList = JSON.parse(localStorage.getItem('list')) || [];

/* display existing to-dos */
existingList.forEach((item) => {
	const li = document.createElement('li')
	li.textContent = item
	myUl.appendChild(li)
});

myButton.addEventListener('click', () => {
	/* extract the new todo */
	const newTodo = myInput.value;

	/* if its a valid entry */
	if (newTodo !== '') {
		existingList.push(newTodo)
		/* save updated list to local storage */
		localStorage.setItem('list', JSON.stringify(existingList));

		const li = document.createElement('li')
		li.textContent = newTodo
		
		myUl.appendChild(li)
		myInput.value = ''
	}
});