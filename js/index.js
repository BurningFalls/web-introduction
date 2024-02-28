const registration_button = document.getElementById("registration");

function showAllert() {
    const user_name = document.getElementById("name").value;

    let cnt = 0;
    for(let i = 1; i <= 5; i++) {
        const str = "checkbox" + i;
        if (document.getElementById(str).checked) {
            cnt += 1;
        }
    }

    window.alert(user_name + "님, 저와 " + cnt + "개의 취향이 같으시네요!");
}

registration_button.addEventListener("click", showAllert);