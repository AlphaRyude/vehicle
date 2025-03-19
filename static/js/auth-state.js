// Function to check if user is logged in
async function checkLoginStatus() {
    try {
        const response = await fetch('/check-auth', {
            credentials: 'include'
        });
        const data = await response.json();
        console.log('Auth status:', data); // Debug log
        return data;
    } catch (error) {
        console.error('Error checking auth status:', error);
        return { isLoggedIn: false };
    }
}

// Function to update navigation based on login status
function updateNavigation(data) {
    console.log('Updating navigation with:', data); // Debug log
    const authButtons = document.querySelector('.auth-buttons');
    const userButtons = document.querySelector('.user-buttons');
    const userName = document.querySelector('.user-name');
    
    if (data.isLoggedIn) {
        console.log('User is logged in, updating UI'); // Debug log
        if (authButtons) {
            authButtons.style.display = 'none';
            console.log('Auth buttons hidden'); // Debug log
        }
        if (userButtons) {
            userButtons.style.display = 'flex';
            console.log('User buttons shown'); // Debug log
        }
        if (userName) {
            userName.textContent = data.userName;
            console.log('Username set to:', data.userName); // Debug log
        }
    } else {
        console.log('User is not logged in, updating UI'); // Debug log
        if (authButtons) {
            authButtons.style.display = 'flex';
            console.log('Auth buttons shown'); // Debug log
        }
        if (userButtons) {
            userButtons.style.display = 'none';
            console.log('User buttons hidden'); // Debug log
        }
    }
}

// Function to show logout confirmation modal
function showLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if (modal) modal.style.display = 'flex';
}

// Function to hide logout confirmation modal
function hideLogoutModal() {
    const modal = document.getElementById('logoutModal');
    if (modal) modal.style.display = 'none';
}

// Function to handle logout
async function handleLogout() {
    try {
        const response = await fetch('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        
        if (response.ok) {
            hideLogoutModal();
            window.location.href = '/?logout=success';
        } else {
            alert('Logout failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during logout:', error);
        alert('An error occurred during logout. Please try again.');
    }
}

// Initialize auth state
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, checking auth status'); // Debug log
    const data = await checkLoginStatus();
    updateNavigation(data);
    
    // Add logout handler
    const logoutButton = document.querySelector('.btn-logout');
    if (logoutButton) {
        console.log('Logout button found, adding handler'); // Debug log
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            showLogoutModal();
        });
    } else {
        console.log('Logout button not found'); // Debug log
    }

    // Add modal handlers
    const modal = document.getElementById('logoutModal');
    if (modal) {
        const cancelButton = modal.querySelector('.btn-cancel');
        const confirmButton = modal.querySelector('.btn-confirm');

        if (cancelButton) cancelButton.addEventListener('click', hideLogoutModal);
        if (confirmButton) confirmButton.addEventListener('click', handleLogout);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideLogoutModal();
            }
        });
    }
}); 