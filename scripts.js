const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
const lists = document.getElementById('lists');


// WHEN YOU CLICK A BUTTON
function addTodos() {
	const newTodo = myInput.value;

	/* if its a valid entry */
	if (newTodo !== '') {
		const li = document.createElement('li')
		li.innerHTML = newTodo
		
		const span = document.createElement('span')		
		lists.appendChild(li)
		lists.appendChild(span)

		myInput.value = ''
		saveData()
	} else {
		alert('You must write something!')
	}
};
myButton.addEventListener('click', addTodos)


// WHEN YOU CLICK A LIST ITEM
const lst = document.getElementById('lists')

lst.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked')
		saveData()
	}
});

function saveData() {
	const lists = document.getElementById('lists')
	localStorage.setItem('list', lists.innerHTML);
}

function displayData() {
	localStorage.getItem('list') = lists.innerHTML;
}

