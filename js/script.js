document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger icon between bars and times
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburger.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when a navigation link is clicked (for smooth UX on mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Highlight Current Page in Navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname.split('/').pop(); // Get filename

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            // Handle root path for index.html
            link.classList.add('active');
        }
        // Special handling for project-detail.html: highlight projects.html
        if (currentPath === 'project-detail.html' && linkPath === 'projects.html') {
            link.classList.add('active');
        }
    });

    // Dynamic copyright year for footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic Form Handling for Contact Page (if applicable)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            console.log('Form Submitted!');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Subject:', document.getElementById('subject').value);
            console.log('Message:', document.getElementById('message').value);

            // Simulate success
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            formMessage.style.display = 'block';

            // Clear the form
            contactForm.reset();

            // Hide message after a few seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.classList.remove('success');
            }, 5000);

            // You could also simulate an error:
            /*
            formMessage.textContent = 'There was an error sending your message. Please try again.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            formMessage.style.display = 'block';
            */
        });
    }
});