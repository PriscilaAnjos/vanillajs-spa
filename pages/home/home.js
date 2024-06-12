function redirectLogin() {
    redirectTo('login');
}

(function() {
    const navTitle = document.getElementById('navbar-brand');
    navTitle.innerHTML = document.title;

    if (isLogged()) {
        const username = document.getElementById('username');
        
        username.innerHTML = getUser().name;
    }
})();