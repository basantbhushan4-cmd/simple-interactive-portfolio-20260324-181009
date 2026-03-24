document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid'); // Added for potential empty state

    if (filterButtons.length === 0 || projectCards.length === 0) {
        // No filter or projects on this page, exit
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterValue = button.dataset.filter;
            let projectsShownCount = 0;

            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex'; // Show card
                    projectsShownCount++;
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });

            // Optional: Display a message if no projects match the filter
            if (projectsShownCount === 0) {
                if (!document.getElementById('no-projects-message')) {
                    const noProjectsMessage = document.createElement('p');
                    noProjectsMessage.id = 'no-projects-message';
                    noProjectsMessage.textContent = `No projects found for "${filterValue.replace('-', ' ')}" category.`;
                    noProjectsMessage.style.textAlign = 'center';
                    noProjectsMessage.style.fontSize = '1.2em';
                    noProjectsMessage.style.color = 'var(--secondary-color)';
                    noProjectsMessage.style.marginTop = '30px';
                    projectsGrid.parentNode.insertBefore(noProjectsMessage, projectsGrid.nextSibling);
                } else {
                    document.getElementById('no-projects-message').textContent = `No projects found for "${filterValue.replace('-', ' ')}" category.`;
                    document.getElementById('no-projects-message').style.display = 'block';
                }
            } else {
                const existingMessage = document.getElementById('no-projects-message');
                if (existingMessage) {
                    existingMessage.style.display = 'none';
                }
            }
        });
    });
});