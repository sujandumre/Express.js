# 🛠️ Express + Pug Form Submission App

This is a basic Node.js web application built with **Express.js** and **Pug** that serves static files, renders dynamic views, and handles form submissions by saving the submitted data to a file.



## 🚀 Features

- 📄 Renders a dynamic form page using **Pug template engine**
- 📨 Handles POST requests from a form
- 📁 Writes form data to a text file (`output.txt`)
- 🖼️ Serves static files from the `/static` directory
- 💡 Simple and lightweight — great for beginners learning Node.js and Express



## 🧰 Technologies Used

- Node.js
- Express.js
- Pug (formerly Jade)
- HTML/CSS (served from `/static`)
- File System module (`fs`)



## 📁 Project Structure

project/
│
├── static/ # Static assets like CSS, images
│
├── views/ # Pug templates (e.g., index.pug)
│ └── index.pug
│
├── output.txt # File where form submissions are saved
│
└──app.js # Main application file (your Express server)
│
└── README.md # Project documentation



## 📦 Installation

1. **Clone the repository**
 
   git clone https://github.com/dumresujan/express-pug-form-app.git
   cd express-pug-form-app
Install dependencies


npm install
▶️ Run the Application
Start the development server:


node app.js
Visit the app in your browser at:
👉 http://localhost:80

📬 Sample Form Output
If you submit the form, a line like this will be written to output.txt:


The name of the client is John Doe, email is john@example.com, phone is 1234567890, and address is 123 Main Street.
📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Built as a practice project for learning Express.js and Pug integration.

✍️ Author
Sujan Dumre
Your GitHub Profile
