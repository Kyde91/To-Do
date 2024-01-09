function createToDo() {
  var input = document.getElementById("task").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
}
