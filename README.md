# 🍽️ Food Voting App

This is a simple web-based food voting application where users can vote for their favorite meal: **Breakfast**, **Lunch**, or **Dinner**. The app is built using **Node.js**, **Express**, and **HTML/CSS**, and styled with a background image and a centered voting box.

---

## 🚀 Features

- Vote for your favorite meal
- View real-time results
- Simple and attractive user interface
- Dockerized and ready for OpenShift deployment

---

## 📁 Project Structure

```
Food-Voting-App/
├── public/
│   ├── index.html       # Voting interface
│   ├── results.html     # Results display
│   └── style.css        # Styling for pages
├── server.js            # Node.js backend
├── Dockerfile           # For containerization
├── package.json         # Node.js dependencies
└── README.md            # Project info
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-voting-app.git
cd food-voting-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
node server.js
```

Then visit: [http://localhost:8080](http://localhost:8080)

---

## 🐳 Docker & OpenShift

### Docker Build

```bash
docker build -t food-voting-app .
docker run -p 8080:8080 food-voting-app
```

### OpenShift Deployment

1. Login to OpenShift.
2. Create a new project.
3. Upload the app or use Git import.
4. OpenShift will detect the `Dockerfile` and build automatically.
5. Expose the service to get a public route.

---

## 📦 Dependencies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📄 License

This project is open-source and free to use.

---

## 🙌 Author

Made with ❤️ by [Your Name]
