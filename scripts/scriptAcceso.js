document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = [
        {username: 'NoritaLopez', password: 'ramoncitomiamor'},
        {username: 'adz', password: 'loveOrDie'}
    ];

    if (username === users[0].username && password === users[0].password) {
        window.location.href = 'menu.html';
    } else if (username === users[1].username && password === users[1].password) {
        window.location.href = 'menu.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
