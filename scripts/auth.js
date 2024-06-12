const SESSION_USER_KEY = 'SESSION_USER_KEY';

function login(name, password) {
    const user = {
        name, password
    }

    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));

    return Promise.resolve(user);
}

function getUser() {
    const userString = sessionStorage.getItem(SESSION_USER_KEY);

    if (userString) {
        return JSON.parse(userString);
    }
}

function isLogged() {
    return !!getUser();
}

function logout() {
    sessionStorage.removeItem(SESSION_USER_KEY);

    redirectTo('login');
}
