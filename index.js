var form = document.getElementById("inputForm");
form.addEventListener("submit", saveTask);

function fetchTasks() {
    resetLists();
  var tasks = JSON.parse(localStorage.getItem("notes"));
  if(!tasks)
  return;
  tasks.forEach((task) => {
    var title = task.title;
    var description = task.description;
    var status = task.status;
    var card = document.createElement("li");
    card.classList.add("task");
    card.classList.add("fill");

    if (title && description) {
      card.innerHTML = `
                                <h3>${title}</h3>
                                <p>${description}</p>
                                <button class="del">Delete</button>`;

      var notesElem = document.getElementById(status);
      notesElem.appendChild(card);
    }
  });
}

function resetLists()
{
    document.getElementById('To Do').innerHTML='';
    document.getElementById('In Progress').innerHTML='';
    document.getElementById('Done').innerHTML='';
}


function saveTask(e) {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var status = selectedValue;

  if(title=="")
  return;
  var task = {
    title: title,
    description: description,
    status: status,
  };
  var tasks =(localStorage.getItem("notes")==null) ? []: JSON.parse(localStorage.getItem("notes"));
  tasks.push(task);
  localStorage.setItem('notes', JSON.stringify(tasks));
  fetchTasks();

  e.preventDefault();
}


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
var selectedValue = selected.innerHTML.trim();

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

//  when we select on any of the options we want the text to be displayed over select category
// and remove the active class from
// add event listener for all options in our list

optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      selectedValue = selected.innerHTML.trim();
      //   console.log(selValue.trim());
  
      optionsContainer.classList.remove("active");
    });
  });
  