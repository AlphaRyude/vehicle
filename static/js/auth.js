// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Function to handle form submission
async function handleFormSubmit(form, endpoint) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                if (endpoint === '/login') {
                    // Redirect to home page with success message
                    window.location.href = '/?login=success';
                } else {
                    // Show success message and redirect to login
                    alert('Registration successful! Please login.');
                    window.location.href = '/login';
                }
            } else {
                alert(result.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
}

// Initialize form handlers
if (loginForm) {
    handleFormSubmit(loginForm, '/login');
}

if (registerForm) {
    handleFormSubmit(registerForm, '/register');
}

// Password validation for registration
if (registerForm) {
    const password = registerForm.querySelector('#password');
    const confirmPassword = registerForm.querySelector('#confirmPassword');
    
    registerForm.addEventListener('submit', (e) => {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });
} 