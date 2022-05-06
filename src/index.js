document.addEventListener("DOMContentLoaded", () => {
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM 
// after the submit button has been activated.
const form = document.querySelector("form")
const tasks = document.querySelector("#tasks")

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const inputValue = e.target.task.value
  addElement(inputValue)
})

function addElement(element){
  let p = document.createElement("p")
  p.textContent = ` ${element} `
  tasks.appendChild(p)
}
});