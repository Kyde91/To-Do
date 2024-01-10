/* 
This function takes the user input and stores it in a list below the taskbar. 
the chosen task is has a remove button for once the task is completed
*/

function createToDo() {
  var input = document.getElementById("task").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var remove = document.createElement("button");

  remove.classList.add("remove");
  remove.innerHTML = "Complete";
  remove.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  li.appendChild(remove);
}
