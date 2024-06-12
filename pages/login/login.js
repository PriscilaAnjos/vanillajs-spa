function validateForm() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (!username.value || !password.value) {
        return;
    }

    login(username.value, username.password)
        .then(() => {
            redirectTo('home');
        });
}

function changePasswordType() {
    const password = document.getElementById('password');
    const eye = document.getElementById('bi-eye');
    const eyeSlash = document.getElementById('bi-eye-slash');

    password.type = password.type === 'text' ? 'password' : 'text';

    if (password.type === 'password') {
        eye.style.display = 'inline-block';
        eyeSlash.style.display = 'none';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'inline-block';
    }
}
