var data;
window.addEventListener('load', function () {
    data = loadData('data') || []
    var form = document.getElementById('form');
    form.addEventListener('submit', handleInput)

    var login = document.getElementById("login");
    login.addEventListener('click', enterLogin)
})

function enterLogin() {
    location.href = "../login/index.html"
}

function handleInput() {
    event.preventDefault();
    var form = new FormData(event.target);
    var name = form.get('name');
    var email = form.get('email');
    var password = form.get('password');

    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""

    if (name.length < 4 && password.length < 6) {
        var minName = document.getElementById('minName');
        minName.textContent = "*Minimum 4 characters Required"

        var minPass = document.getElementById('minPass');
        minPass.textContent = "*Minimum 6 characters Required"
        return
    }
    else if (name.length < 4) {
        var minName = document.getElementById('minName');
        minName.textContent = "*Minimum 4 characters Required"
        return
    }
    else if (password.length < 6) {
        var minPass = document.getElementById('minPass');
        minPass.textContent = "*Minimum 6 characters Required"
        return
    }

    
 
    document.getElementById('minName').textContent=""
    document.getElementById('minPass').textContent=""
    document.getElementById('error').textContent=""

    var payload = {
        name: name,
        email: email,
        password: password,
        transactions:[]
    }
    if (data.length == 0) {
        data.push(payload)
        alert('Registered Successfully')
        saveData('data', data);
    }
    else {
        var flag = 0
        for (var i = 0; i < data.length; i++) {
            if (email == data[i]['email']) {
                flag = 1;
                break
            }
        }
        if (flag == 0) {
            data.push(payload)
            alert('Registered Successfully')
            saveData('data', data);
        }
        else {
            var exists = document.getElementById('error')
            exists.textContent = "!Account Already Exists"
        }
    }

    
}
function loadData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}


