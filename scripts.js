const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
const myUl = document.querySelector('ul');


// GET EXISTING TODOS & CREATE LIST ITEM FOR EACH
/* Load existing list or create one if none */
const existingList = JSON.parse(localStorage.getItem('list')) || [];

/* display existing to-dos */
existingList.forEach((item) => {
	const li = document.createElement('li')
	li.textContent = item
	myUl.appendChild(li)
});

// WHEN YOU CLICK A BUTTON
function addTodos() {
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
};
myButton.addEventListener('click', addTodos);


// WHEN YOU CLICK A LIST ITEM

const lst = document.querySelectorAll('li')

lst.forEach(item => {
	item.addEventListener('click', () => {
		item.style.textDecoration = 'line-through'
		//item.style.backgroundImage = 'url(images/checked.png)'
	})
});


