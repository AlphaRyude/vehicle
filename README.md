# Luxury Vehicle Rental Website

A modern website for renting luxury cars and bikes with a black and yellow aesthetic theme.

## Features

- User authentication (login/register)
- Display of 15 luxury cars and 15 premium bikes
- Responsive design
- Interactive gallery
- Testimonials section
- Newsletter subscription
- Modern UI with black and yellow theme

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- Backend:
  - Python (Flask)
- Database:
  - MySQL

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd luxury-rentals
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up MySQL database:
```sql
CREATE DATABASE luxury_rentals;
```

5. Create a `.env` file in the root directory with the following content:
```
SECRET_KEY=your-secret-key
DATABASE_URL=mysql://user:password@localhost/luxury_rentals
```

6. Run the application:
```bash
python app.py
```

7. Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
luxury-rentals/
├── app.py
├── requirements.txt
├── static/
│   ├── css/
│   │   ├── style.css
│   │   └── auth.css
│   ├── js/
│   │   ├── main.js
│   │   └── auth.js
│   └── images/
│       ├── cars/
│       ├── bikes/
│       └── gallery/
├── templates/
│   ├── index.html
│   ├── login.html
│   └── register.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 