document.addEventListener('DOMContentLoaded', () => {
    // This file can be used for any project-specific interactivity beyond filtering.
    // For a static portfolio, it might populate dynamic data on project-detail.html
    // or handle things like image carousels if they were implemented.

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Simulate project data (in a real app, this would come from an API/JSON)
    const projectsData = [
        {
            id: '1',
            title: 'Task Manager App',
            tagline: 'A robust web application to streamline your daily tasks and boost productivity.',
            image: 'https://via.placeholder.com/800x500?text=Task+Manager+App',
            description: `This full-stack Task Manager application helps users organize, prioritize, and track their tasks efficiently. It features user authentication, a clean dashboard, task creation, editing, deletion, and status updates. The goal was to build an intuitive interface that makes task management effortless across all devices.
                          The front-end was built with React for a dynamic user experience, while the back-end utilized Node.js and Express.js to provide a powerful API. MongoDB was chosen for its flexibility in storing task data.`,
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SCSS', 'JWT Authentication'],
            liveDemo: '#', // Placeholder link
            githubRepo: 'https://github.com/yourusername/task-manager-app' // Placeholder link
        },
        {
            id: '2',
            title: 'Online Store Front',
            tagline: 'A modern e-commerce platform designed for seamless product browsing and secure checkout.',
            image: 'https://via.placeholder.com/800x500?text=E-commerce+Store',
            description: `An elegant e-commerce website featuring product categories, search functionality, a shopping cart, and a secure checkout process. This project focused on creating a smooth customer journey from product discovery to purchase completion.
                          Developed using Vue.js for the interactive front-end, a custom Node.js/Express.js backend for product management and order processing, and integrated with Stripe for payment handling. Responsive design was a key consideration to ensure a consistent experience on all devices.`,
            technologies: ['Vue.js', 'Node.js', 'Express.js', 'Stripe API', 'PostgreSQL', 'Responsive Design'],
            liveDemo: '#',
            githubRepo: 'https://github.com/yourusername/online-store-front'
        },
        {
            id: '3',
            title: "Designer's Portfolio",
            tagline: 'A minimalist and aesthetically pleasing portfolio showcasing creative design work.',
            image: 'https://via.placeholder.com/800x500?text=Creative+Portfolio',
            description: `This project is a personal portfolio website for a graphic designer, built with a focus on clean aesthetics and user experience. It features distinct sections for projects, an about page, and contact information.
                          The site leverages modern HTML5, CSS3 with custom animations, and vanilla JavaScript for interactive elements like a project gallery and smooth scrolling. The design emphasizes large imagery and clear typography to highlight the designer's work effectively.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animations (example)', 'Figma (design)'],
            liveDemo: '#',
            githubRepo: 'https://github.com/yourusername/designers-portfolio'
        },
        {
            id: '4',
            title: 'Admin Dashboard UI',
            tagline: 'A clean and functional user interface for an administrative dashboard application.',
            image: 'https://via.placeholder.com/800x500?text=Dashboard+UI',
            description: `This project involves the development of a comprehensive Admin Dashboard UI, designed to manage various aspects of a web application. It includes components for user management, analytics, settings, and notifications.
                          Built with React for modularity and state management, and styled with Tailwind CSS for rapid and consistent UI development. Emphasis was placed on creating a highly responsive layout that adapts well to different screen sizes, providing an optimal experience for administrators on desktop and tablet devices.`,
            technologies: ['React.js', 'Tailwind CSS', 'Chart.js', 'RESTful API Integration (mock)'],
            liveDemo: '#',
            githubRepo: 'https://github.com/yourusername/admin-dashboard-ui'
        },
        {
            id: '5',
            title: 'Real-time Weather App',
            tagline: 'An interactive web application displaying live weather conditions for any city worldwide.',
            image: 'https://via.placeholder.com/800x500?text=Weather+App',
            description: `A dynamic weather application that fetches and displays real-time weather information using a public weather API. Users can search for weather conditions by city name, and the app provides details such as temperature, humidity, wind speed, and weather description.
                          Developed using vanilla JavaScript for all functionalities, HTML for structure, and CSS for styling. Asynchronous JavaScript (Fetch API) was used to make API calls, demonstrating strong understanding of modern web data retrieval techniques.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeather API', 'Geolocation API'],
            liveDemo: '#',
            githubRepo: 'https://github.com/yourusername/weather-app'
        },
        {
            id: '6',
            title: 'Online Book Store',
            tagline: 'A platform for book enthusiasts to browse, search, and purchase books online.',
            image: 'https://via.placeholder.com/800x500?text=Book+Store',
            description: `This project is an online book store application that allows users to explore a wide catalog of books, view details, read reviews, and add items to a shopping cart for purchase. It includes features like user authentication and a simple order history.
                          The application was built using Angular for a robust and maintainable front-end, with Firebase providing a backend-as-a-service solution for database and authentication. Custom SCSS was used for styling to achieve a modern and appealing interface.`,
            technologies: ['Angular', 'Firebase (Firestore, Auth)', 'SCSS', 'RxJS'],
            liveDemo: '#',
            githubRepo: 'https://github.com/yourusername/online-book-store'
        }
    ];

    if (window.location.pathname.includes('project-detail.html') && projectId) {
        const project = projectsData.find(p => p.id === projectId);

        if (project) {
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-tagline').textContent = project.tagline;
            document.getElementById('project-image').src = project.image;
            document.getElementById('project-image').alt = project.title;
            document.getElementById('project-description').textContent = project.description;

            const techList = document.getElementById('project-tech-list');
            techList.innerHTML = ''; // Clear existing list
            project.technologies.forEach(tech => {
                const li = document.createElement('li');
                // Basic icon mapping, can be expanded
                let iconClass = 'fas fa-code'; // Default icon
                if (tech.toLowerCase().includes('react')) iconClass = 'fab fa-react';
                else if (tech.toLowerCase().includes('node')) iconClass = 'fab fa-node-js';
                else if (tech.toLowerCase().includes('mongo')) iconClass = 'fas fa-database';
                else if (tech.toLowerCase().includes('html')) iconClass = 'fab fa-html5';
                else if (tech.toLowerCase().includes('css')) iconClass = 'fab fa-css3-alt';
                else if (tech.toLowerCase().includes('javascript')) iconClass = 'fab fa-js';
                else if (tech.toLowerCase().includes('vue')) iconClass = 'fab fa-vuejs';
                else if (tech.toLowerCase().includes('angular')) iconClass = 'fab fa-angular';
                else if (tech.toLowerCase().includes('github')) iconClass = 'fab fa-github';
                else if (tech.toLowerCase().includes('aws')) iconClass = 'fab fa-aws';
                else if (tech.toLowerCase().includes('express')) iconClass = 'fas fa-server';
                else if (tech.toLowerCase().includes('sql')) iconClass = 'fas fa-database';
                else if (tech.toLowerCase().includes('tailwind')) iconClass = 'fab fa-css3-alt'; // No specific Tailwind icon, use CSS
                else if (tech.toLowerCase().includes('stripe')) iconClass = 'fab fa-cc-stripe';
                else if (tech.toLowerCase().includes('firebase')) iconClass = 'fas fa-fire'; // Not exact, but close
                
                li.innerHTML = `<i class="${iconClass}"></i> ${tech}`;
                techList.appendChild(li);
            });

            document.getElementById('live-demo-link').href = project.liveDemo;
            document.getElementById('github-link').href = project.githubRepo;

            // Update title
            document.title = `${project.title} - Project Detail | Portfolio`;
        } else {
            // Project not found, redirect or show error
            document.getElementById('project-title').textContent = 'Project Not Found';
            document.getElementById('project-tagline').textContent = 'The project you are looking for does not exist.';
            document.getElementById('project-image').src = 'https://via.placeholder.com/800x500?text=Project+Not+Found';
            document.getElementById('project-description').textContent = 'Please go back to the projects page to find other exciting works.';
            document.getElementById('project-tech-list').innerHTML = '';
            document.getElementById('live-demo-link').style.display = 'none';
            document.getElementById('github-link').style.display = 'none';
        }
    }
});