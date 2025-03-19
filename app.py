from flask import Flask, render_template, session, redirect, url_for, flash, request
from data.vehicles import cars, bikes

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Change this to a secure secret key in production

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/vehicles')
def vehicles():
    return render_template('vehicles.html', cars=cars, bikes=bikes)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # Add your user authentication logic here
        # For demonstration, using a simple check
        if username == 'admin' and password == 'password':
            session['logged_in'] = True
            session['username'] = username
            flash('Successfully logged in!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password', 'error')
            
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    security_questions = [
        "What was your first pet's name?",
        "In which city were you born?",
        "What is your mother's maiden name?",
        "What was the name of your first school?",
        "What is your favorite book?",
        "What is the name of the street you grew up on?"
    ]
    return render_template('register.html', security_questions=security_questions)

@app.route('/dashboard')
def dashboard():
    if not session.get('logged_in'):
        flash('Please login to access the dashboard', 'error')
        return redirect(url_for('login'))
    return render_template('dashboard.html', username=session.get('username', 'User'))

@app.route('/logout')
def logout():
    session.clear()
    flash('Successfully logged out!', 'success')
    return redirect(url_for('index'))

@app.route('/forgot_password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        email = request.form.get('email')
        # Add your password reset logic here
        flash('Password reset instructions have been sent to your email.', 'success')
        return redirect(url_for('login'))
    return render_template('forgot_password.html')

if __name__ == '__main__':
    app.run(debug=True)