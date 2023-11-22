window.onload = function () {

    console.log('Хорошего дня!');

    let inputName = document.getElementById('input-name');
    let inputUsername = document.getElementById('input-username');
    let checkbox = document.getElementById('checkbox');
    let inputMail = document.getElementById('mail');
    let inputPassword = document.getElementById('password');
    let inputRepeatPassword = document.getElementById('repeat');
    let popup = document.getElementById('popup');
    let form = document.getElementById('form');
    let popupClose = document.getElementById('popup-close')

    inputName.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            return false;
        }
    }

    inputUsername.onkeydown = (e) => {
        let point = '.';
        let comma = ',';
        if (e.key === point || e.key === comma) {
            return false;
        }
    }

    checkbox.onchange = (e) => {
        if (e.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }

    document.getElementById('create-order').onclick = function (e) {
        e.preventDefault();
        if (!inputName.value) {
            alert('Заполните имя!')
            return;
        }
        if (!inputUsername.value) {
            alert('Заполните имя пользователя!')
            return;
        }
        if (!inputMail.value) {
            alert('Заполните e-mail!')
            return;
        }
        if (!inputPassword.value) {
            alert('Введите пароль!')
            return;
        }
        if (!inputRepeatPassword.value) {
            alert('Повторите пароль!')
            return;
        }
        if (inputPassword.value.length < 8) {
            alert('Пароль должен содержать 8 символов!')
            return;
        }
        if (inputRepeatPassword.value !== inputPassword.value) {
            alert('Пароли не совпадают!')
            return;
        }
        if (!checkbox.checked) {
            alert('Не выбран чекбокс!')
            return;
        }
        popup.style.display = 'flex';
        popupClose.onclick = function () {
            showLogin();
            popup.style.display = 'none';
        }
        form.reset();
        return true;
    }

    document.getElementById('already-link').onclick = showLogin;

    function showLogin() {
        document.getElementById('get-account').innerText = 'Log in to the system';
        document.getElementById('full-name').remove();
        document.getElementById('email').remove();
        document.getElementById('passwords').remove();
        document.getElementById('checkboxes').remove();
        document.getElementById('create-order').innerText = 'Sign in';
        document.getElementById('already-link').remove();
        document.getElementById('create-order').onclick = function () {
            if (!inputUsername.value) {
                alert('Заполните имя!')
                return;
            }
            if (!inputPassword.value) {
                alert('Введите пароль!')
                return;
            }
            alert(`Добро пожаловать ${inputUsername.value}`)
        }
    }
}
