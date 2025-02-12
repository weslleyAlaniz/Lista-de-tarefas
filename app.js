function adicionarTarefa() {
    let tarefa = document.querySelector("#task").value; 
    let listaDeTarefas = document.getElementById("tasks");

    listaDeTarefas.innerHTML += `
        
        <div class="task">
            <input type="checkbox" class="checkbox">
            <label class="checkmark"></label>
            <span class="task-text">${tarefa}</span>
        </div>`;
    }