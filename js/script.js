var removeSVG = '<img class="remove" src="images/remove.svg" alt="Remove">';
var completeSVG = '<img class="complete" src="images/complete.svg" alt="Complete">';
// User clicked on the add button
// If there is any text inside item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	if(value) addItemTodo(value);
});

function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item)
}
function addItemTodo(text) {
	var list = document.getElementById('todo');
	var item = document.createElement('li');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeSVG;

	remove.addEventListener('click', removeItem);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeSVG;

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}