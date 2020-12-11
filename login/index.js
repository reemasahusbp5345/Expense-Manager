window.addEventListener('load', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', handleLogin)
});


function handleLogin(event) {
    event.preventDefault();
    var form = new FormData(event.target);
    var email = form.get('email');
    var password = form.get('password')
    data = JSON.parse(localStorage.getItem('data'))
    var flag = 0;

    for (var i = 0; i < data.length; i++) {
        if (email == data[i]['email'] && password == data[i]['password']) {
            localStorage.setItem('loginUser',JSON.stringify(data[i]))
            location.href="../dashboard/dashboard.html"
            break;
        }
        else if (email == data[i]['email']) {
            if (password != data[i]['password']) {
                flag = 1
            }
        }
    }

    if (flag == 1) {
        var show = document.getElementById('show');
        show.textContent = "*Wrong Password"
    }
    else {
        var show = document.getElementById('show');
        show.textContent = "!Account doesn't exist"
    }
}