function loadPage(pageToAccess) {
    let main = document.getElementById('app-main');

    fetch(`./pages/${pageToAccess}/${pageToAccess}.html`)
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            main.innerHTML = text;

            const scriptId = 'script-custom-page';

            if (document.getElementById(scriptId)) {
                document.body.removeChild(document.getElementById(scriptId));
            }

            const script = document.createElement('script');
            script.src = `./pages/${pageToAccess}/${pageToAccess}.js`;
            script.id = scriptId;
            document.body.appendChild(script);

            const linkId = 'link-custom-page';

            if (document.getElementById(linkId)) {
                document.head.removeChild(document.getElementById(linkId));
            }

            const link = document.createElement('link');
            link.href = `./pages/${pageToAccess}/${pageToAccess}.css`;
            link.rel = 'stylesheet';
            link.id = linkId;
            document.head.appendChild(link);
        });
}

function watchHashChange() {
    window.addEventListener("hashchange", () => {
        hashChanged();
    },
        false,
    );

}

function hashChanged() {
    var hash = location.hash.replace(/[#\/]/g, '') || 'home';

    if (hash === 'login' && isLogged()) {
        window.history.back();
    } else if (hash !== 'login' && !isLogged()) {
        loadPage('login');
    } else {
        loadPage(hash);
    }

}

function redirectTo(name) {
    window.history.pushState(null, null, `#${name}`);
    hashChanged();
}

(function () {
    watchHashChange();

    hashChanged();
})();