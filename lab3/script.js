// alert('I am js');
// let admin,name;
// name='John';
// admin=name;
// alert(admin);
// let Earth;
// let name_consumer;

// //Nan Infinity,-Infinity
// //2^53-1=>number type
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list");
function addTask() {
    if (inputBox.value === '') {
        alert('Write task');
    } else {
        // Создаем новый элемент <li>
        let li = document.createElement("li");

        // Создаем и добавляем checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"; // Устанавливаем тип как checkbox
        li.appendChild(checkbox); // Добавляем его в <li>

        // Добавляем текст задачи
        let taskText = document.createElement("span");
        taskText.innerHTML = inputBox.value;
        li.appendChild(taskText); // Добавляем текст задачи

        // Создаем и добавляем иконку корзины для удаления
        let span = document.createElement("span");
        span.innerHTML = "🗑️";
        span.classList.add("trash-icon"); // Класс для корзины
        li.appendChild(span); // Добавляем корзину

        // Добавляем <li> в список
        listContainer.appendChild(li);

        // Очищаем поле ввода после добавления задачи
        inputBox.value = "";

        // Добавляем обработчик для изменения состояния задачи
        checkbox.addEventListener("change", function() {
            // Заcчеркиваем или убираем зачеркивание только с текста задачи
            if (checkbox.checked) {
                taskText.classList.add("checked");
            } else {
                taskText.classList.remove("checked");
            }
        });

        // Добавляем обработчик для удаления задачи
        span.addEventListener("click", function() {
            li.remove();
        });
    }
}


listContainer.addEventListener("click", function (e) {
    // Если клик на чекбоксе, меняем статус задачи
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentElement.classList.toggle("checked");
    }

    // Если клик на иконке корзины, удаляем задачу
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});