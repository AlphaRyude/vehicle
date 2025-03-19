// Gallery images
const galleryImages = [
    "static/images/gallery/gallery1.jpg",
    "static/images/gallery/gallery2.jpg",
    "static/images/gallery/gallery3.jpg",
    "static/images/gallery/gallery4.jpg",
    "static/images/gallery/gallery5.jpg",
    "static/images/gallery/gallery6.jpg",
    "static/images/gallery/gallery7.jpg",
    "static/images/gallery/gallery8.jpg"
];

// DOM Elements
const galleryGrid = document.querySelector('.gallery-grid');

// Function to handle page transitions with loading animation
function handlePageTransition(targetUrl) {
    window.location.href = `/loading?target=${encodeURIComponent(targetUrl)}`;
}

// Function to handle login notification
function handleLoginNotification() {
    const loginNotification = document.querySelector('.login-notification');
    
    if (loginNotification) {
        // Auto-dismiss after animation completes (3 seconds)
        setTimeout(() => {
            loginNotification.classList.add('hide');
            
            // Remove from DOM after animation completes
            setTimeout(() => {
                loginNotification.remove();
            }, 500);
            
            // Remove the session flag via AJAX
            fetch('/clear_login_flag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).catch(error => console.error('Error clearing login flag:', error));
            
        }, 3000);
    }
}

// Function to create gallery items
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${image}" alt="Gallery Image">
        <div class="gallery-overlay">
            <h3>Luxury Experience</h3>
            <p>Unforgettable moments</p>
        </div>
    `;
    return item;
}

// Function to display gallery
function displayGallery() {
    if (galleryGrid) {
        galleryImages.forEach(image => {
            galleryGrid.appendChild(createGalleryItem(image));
        });
    }
}

// Function to show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Trigger reflow
    notification.offsetHeight;
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 2 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        // Remove from DOM after animation
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

// Handle Registration Success
function handleRegistrationSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('registered') === 'true') {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.display = 'block';
        successMessage.textContent = 'Welcome to Prime Wheels! Your account has been created successfully.';
        
        const form = document.querySelector('form');
        if (form) {
            form.insertBefore(successMessage, form.firstChild);
        }
    }
}

// Handle Login Success
function handleLoginSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('loggedin') === 'true') {
        showNotification("Welcome back! You've successfully logged in to your account.");
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayGallery();
    handleRegistrationSuccess();
    handleLoginSuccess();
    handleLoginNotification();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Vehicle filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            vehicleCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Function to filter vehicles
function filterVehicles(type) {
    fetch(`/api/vehicles?type=${type}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(vehicles => {
            const vehicleGrid = document.querySelector('.vehicle-grid');
            if (!vehicleGrid) {
                console.warn('Vehicle grid not found in the DOM');
                return;
            }
            
            vehicleGrid.innerHTML = '';
            
            if (vehicles.length === 0) {
                vehicleGrid.innerHTML = '<div class="no-results">No vehicles found for this category</div>';
                return;
            }
            
            vehicles.forEach(vehicle => {
                const card = createVehicleCard(vehicle);
                vehicleGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching vehicles:', error);
            
            // Fallback to static content if API fails
            const vehicleGrid = document.querySelector('.vehicle-grid');
            if (vehicleGrid) {
                vehicleGrid.innerHTML = '<div class="api-error">Unable to load vehicles. Please try again later.</div>';
            }
        });
}

// Function to create vehicle card
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.setAttribute('data-category', vehicle.type || 'unknown');
    
    // Use a default image if image_url is missing or invalid
    const imageUrl = vehicle.image_url || 'https://via.placeholder.com/400x300?text=Vehicle+Image';
    
    // Format price with commas and handle missing values
    const price = vehicle.price ? `$${vehicle.price.toLocaleString()} / day` : 'Price on request';
    
    // Use a default description if missing
    const description = vehicle.description || 'Luxury vehicle available for rent';
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${vehicle.name}" class="vehicle-image" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Available'">
        <div class="vehicle-info">
            <h3 class="vehicle-name">${vehicle.name || 'Luxury Vehicle'}</h3>
            <p class="vehicle-price">${price}</p>
            <p class="vehicle-description">${description}</p>
            <a href="#" class="btn-rent">rent now</a>
        </div>
    `;
    return card;
}

// Initialize vehicles on page load - only if we're on a page with a vehicle grid
document.addEventListener('DOMContentLoaded', function() {
    const vehicleGrid = document.querySelector('.vehicle-grid');
    if (vehicleGrid) {
        filterVehicles('all');
    }
});