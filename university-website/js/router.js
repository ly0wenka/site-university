function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            window.history.pushState({}, '', `/${page}`);
        });
}

window.onpopstate = () => {
    const path = window.location.pathname.substring(1);
    loadPage(path || 'home');
};

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.substring(1);
    loadPage(path || 'home');
});
