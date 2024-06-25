const addTaskButton = document.querySelector("button")
const inputBox = document.querySelector("input")
const myUl = document.querySelector("ul")

addTaskButton.addEventListener("click", function () {
    // Logic to collect the task present in the input box
    let enteredTask = inputBox.value

    // Create an li tag
    const myLi = document.createElement("li")
    myLi.innerHTML = `${enteredTask} <button class="deleteBtn">Delete</button>`
    console.log(myLi);

    // myLi has to be displayed to the browser
    // myLi append it to index.html

    myUl.append(myLi)

    // Logic to clear the input box
    inputBox.value = ""

    let myDeleteBtn = myLi.querySelector(".deleteBtn")

    myDeleteBtn.addEventListener("click", function () {
        // Logic to remove entire myLi
        myLi.remove()
    })
})