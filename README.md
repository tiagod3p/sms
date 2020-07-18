
<p align="center">
  <a href="https://www.twitter.com/tiagod3p/">
    <img alt="Follow on Twitter" src="https://img.shields.io/twitter/follow/tiagod3p?label=Follow&style=social">
  </a>
  
  <a href="https://github.com/tiagod3p/sms/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tiagod3p/sms">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/tiagod3p/sms/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/tiagod3p/sms?style=social">
  </a>

  <a href="https://www.linkedin.com/in/tiagovidaldepaula/">
    <img alt="Built by Tiago" src="https://img.shields.io/badge/built%20by-Tiago%20Vidal-%237519C1">
  </a>
</p>
<h1 align="center">
    <img alt="School Management System - BANNER" title="#School Management System" src="./assets/banner_sms.png" />
</h1>

<h4 align="center"> 
	🚧 SMS - School Management System :school: Finished 🚀 🚧
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#EF%B8%8F+features">Features</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-how-it-works">How it works</a> • 
 <a href="#-tech-stack">Tech Stack</a> • 
 <a href="#-how-to-contribute">How to contribute</a> • 
 <a href="#-author">Author</a> • 
 <a href="#user-content--license">License</a>
</p>


## 💻 About the project

:school: School Management System - is a way to add and manage teachers and students off a school. With this project is possible to see any professor, student that you added, and their informations. 

---

## ⚙️ Features

- [x] Add professors/students
- [x] Edit professors/students
- [x] Search professors/students
- [x] Delete professors/students
- [x] See information about professors/students

---

## 🎨 Layout

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Index Professors" title="#SMS" src="./assets/professors_index.png" width="400px">
                         
  <img alt="Index Students" title="#SMS" src="./assets/students_index.png" width="400px">
</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Adding Students" title="#SMS" src="./assets/add_student.png" width="400px">
                         
  <img alt="Gif demonstration" title="#SMS" src="./assets/gifsms.gif" width="400px">
</p>

---

## 🚀 How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)


#### 🧭 Running the web application

```bash

# Clone this repository
$ git clone https://github.com/tiagod3p/sms.git

# Access the project folder in your terminal
$ cd sms

# Create a database in POSTGRESQL with the tables and the following structures:
# professors -> id, name, birth(timestamp), gender, services, years, created_at(timestamp)
# students -> id, name, email, birth(timestamp), gender, course, professor_id, created_at(timestamp)
# Acess the file src/config/db.js and config your informations.

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The application will open on the port: 5000 - go to http://localhost:5000

```

---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

#### **Website**
-   **[Javascript](https://www.javascript.com/)**
-   **[Node.js](https://nodejs.org/)**
-   **[Express](https://expressjs.com/)**
-   **[PostgreSQL](https://www.postgresql.org/)**

---

## 💪 How to contribute

1. Fork the project.
2. Create a new branch with your changes: git checkout -b my-feature
3. Save your changes and create a commit message telling you what you did: git commit -m" feature: My new feature "
4. Submit your changes: git push origin my-feature
5. Open a pull request!

When the merge of your pull request is done, you can delete your branch.

You can send me as many PR's as you want, I will be honored to review and accept them!

---

## 🦸 Author


 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/62674726?s=460&u=1c4408eb9492a7bf31a18b0a17f8ed7c444ab56b&v=4" width="100px;" alt="Tiago Vidal"/>
 <br />
 <sub><b>Tiago Vidal</b></sub>
 <br />

[![Twitter Badge](https://img.shields.io/twitter/url?label=%40tiagod3p&style=social&url=https://twitter.com/tiagod3p)](https://twitter.com/tiagod3p) [![Linkedin Badge](https://img.shields.io/badge/-Tiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tiagovidaldepaula/)](https://www.linkedin.com/in/tiagovidaldepaula/) 
[![Gmail Badge](https://img.shields.io/badge/-tiagod3p@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tiagod3p@gmail.com)](mailto:tiagod3p@gmail.com)

---

## 📝 License

This project is under the license MIT.

Made with ❤️ by Tiago Vidal 👋🏽 [Get in touch!](https://www.linkedin.com/in/tiagovidaldepaula/)

---
