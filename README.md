This is a basic todo app which supports; Adding a new task, deleting the task, and marking it as complete.
It is built using html, css, and vanilla javascript. ..
First part done i.e. place to add tasks.
Styled the place to add lists. Also, included images for checking and unchecking. No remaining is js.
Tryied adding js functionality to the add buton. For some reason, it sint working.. Need to research more about it.
Yaaay I solved the above isue. Now i can comfortably add todo lists into the list. The button is working perfectly and seamlessly. And appending a new item to the already existing list. 
Apparently i wasnt implementing it correctly. Before, everytime I clicked on the button, the existing list was overwritten and a new ne created. So had to first load existing list, go through the array creating the list element for each li and appending it to Ul. 
Then now going to the click event listener where i just needed to retrive the input value and push the new todo to the existing list. No need to retrieve items here btw. Just pushing, creating li element for our new todo and appending it to Ul.
Added the mark as dne when a list item is clicked. It isnt done though as i need to change the ::before background image as well. Just that then figure out what to do once done.
Arrays was resulting in unreusable code. So i completely did away with it and instead just used lists with no array. Needed to simplify the getting and setting item without the json.parse and stringify functions. This helps create callbale fuctions like saveData. Also, implemented event delegation and toggle function on the li elements. 