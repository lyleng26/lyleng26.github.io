document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let footer = document.querySelector('.footer');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            if (targetId === 'contact') {
                footer.classList.add('show');
            } else {
                footer.classList.remove('show');
            }
        });
    });

    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');

                // Toggle the footer visibility based on the active section
                if (id === 'contact') {
                    footer.classList.add('show');
                } else {
                    footer.classList.remove('show');
                }
            }
        });
    });
});
document.getElementById('scrollToTop').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('hire').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('ed').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#education').scrollIntoView({
        behavior: 'smooth'
    });
});