const tasks= [];
const input = document.getElementById("in");
const addBtn = document.getElementById("add");
const list = document.getElementById("lst");

function render() 
{
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i];
        const p = document.createElement("p");
        p.textContent = taskText;
        list.appendChild(p);
    }    
}

function addText()
{
    const text = input.value;
    tasks.push(text);
    input.value = "";
    render();
}
addBtn.addEventListener("click", addText);

