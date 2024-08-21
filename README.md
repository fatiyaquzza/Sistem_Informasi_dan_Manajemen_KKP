# Lembaga Bantuan Hukum Sata Al-Faqih Information & Management System

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Project Description
The **Lembaga Bantuan Hukum Sata Al-Faqih Information & Management System** is a web-based platform designed to enhance transparency and accessibility of legal aid services. This system provides two distinct user roles: **Admin** and **User**.

- **Users** can easily access information about the legal team, articles, legal services, and contact details.
- **Admins** can manage content through a dashboard, enabling them to update and maintain the information that appears on the site.

This project aims to build a centralized system to facilitate legal aid, improve access to legal information for the public, and automate content management for the organization's admins.

## Features
### User Role:
- View information about the organization
- View contact information 
- View legal team profiles
- Access articles and legal services
- Easy navigation without the need for login/registration

### Admin Role:
- Manage team profiles
- Add, edit, or delete articles
- Access a dedicated admin dashboard to manage website content

## Tech Stack
- **Frontend:** React.js (18.3.1)
- **Backend:** Express.js (4.19.2)
- **Database:** MySQL (15.1)
- **Styling:** Tailwind CSS
- **Other Tools:**
  - Visual Studio Code
  - XAMPP
  - Web Browser (Chrome)

## Installation
To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fatiyaquzza/Sistem_Informasi_dan_Manajemen_KKP.git

2. **Install dependencies for both the frontend and backend::**
   cd backend
   npm install
   cd ../frontend
   npm install

3. **Configure environment variables:**
   Create a .env file in  the backend and specify the following variables:
   ```bash
   APP_PORT=5000
   SESSION_SECRET=<your-session-key>

5. **Start MySQL:**
   Configure your MySQL database connection in the backend (located in config/Database.js).
   Create a database and run migrations if required.

6. **Run the Project:**
7. ```bash
   cd backend
   nodemon
   cd frontend
   npm start
