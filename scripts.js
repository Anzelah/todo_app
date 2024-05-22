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
		lists.appendChild(li)
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
	}
})

/*
const lst = document.querySelectorAll('li')


lst.forEach(item => {
	item.addEventListener('click', () => {
		item.style.textDecoration = 'line-through'
		item.style.setProperty('--image', 'url(images/checked.png)')
	})
});

function saveData() {
	localStorage.setItem('list', lists.innerHTML);
}

function displayData() {
	localStorage.getItem('list') = lists.innerHTML;
}

*/
