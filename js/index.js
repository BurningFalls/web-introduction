const registration_button = document.getElementById("registration");

function showAllert() {
    const user_name = document.getElementById("name").value;

    const query = 'input[type="checkbox"]:checked';
    const selectedElements = document.querySelectorAll(query);
    const selectedElementsCnt = selectedElements.length;

    window.alert(user_name + "님, 저와 " + selectedElementsCnt + "개의 취향이 같으시네요!");
}

registration_button.addEventListener("click", showAllert);




