document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = `
        <nav>
            <ul>
                <li><a href="#" onclick="loadPage('home')">Home</a></li>
                <li><a href="#" onclick="loadPage('departments')">Departments</a></li>
                <li><a href="#" onclick="loadPage('news')">News</a></li>
                <li><a href="#" onclick="loadPage('admissions')">Admissions</a></li>
                <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
            </ul>
        </nav>
    `;

    document.getElementById('footer').innerHTML = `
        <p>&copy; ${new Date().getFullYear()} University Name. All rights reserved.</p>
    `;
});
