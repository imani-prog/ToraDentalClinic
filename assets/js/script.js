// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button if it doesn't exist
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        // Check if menu toggle already exists
        let menuToggle = document.querySelector('.menu-toggle');
        
        if (!menuToggle) {
            // Create menu toggle button
            menuToggle = document.createElement('div');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '<span></span><span></span><span></span>';
            
            // Insert menu toggle before nav
            header.insertBefore(menuToggle, nav);
        }
        
        const navUl = nav.querySelector('ul');
        
        // Toggle menu on click
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = header.contains(event.target);
            
            if (!isClickInside && navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navUl.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});

// Appointment Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const appointmentButton = document.getElementById('appointmentButton');
    
    if (appointmentButton) {
        appointmentButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form values
            const formCover = this.closest('.form-cover');
            const inputs = formCover.querySelectorAll('input');
            let isValid = true;
            
            // Simple validation
            inputs.forEach(input => {
                if (!input.value.trim() && input.type !== 'time') {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Redirect to appointment confirmation page
                window.location.href = 'appointmentmade.html';
            } else {
                alert('Please fill in all required fields');
            }
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
