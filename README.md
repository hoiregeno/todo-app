# To-Do App

A simple to-do list web app with user accounts. The frontend and backend are separate: plain HTML, CSS and JavaScript talk to a PHP and MySQL API.

## Features

- Register, log in and log out
- Add, edit and delete tasks
- Mark tasks as done
- Optional description and due date per task
- Each user sees only their own tasks

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Local server:** XAMPP

## Project Structure

```
todo-app/
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── css/
│   └── js/
└── backend/
    ├── config/
    ├── api/
    ├── models/
    └── database.sql
```

## Getting Started

### Requirements

- XAMPP (Apache and MySQL)
- MySQL Workbench (or phpMyAdmin)

### Setup

1. Clone or copy this project into your XAMPP `htdocs` folder.
2. Start Apache and MySQL in the XAMPP control panel.
3. Run `backend/database.sql` in MySQL Workbench to create the database and tables.
4. Open `backend/config/db.php` and set your database host, name, username and password.
5. Open `http://localhost/todo-app/frontend/login.html` in your browser.

## Database

| Table | Columns |
|-------|---------|
| `users` | id, username, password_hash, created_at |
| `tasks` | id, user_id, title, description, is_done, due_date, created_at, updated_at |

## Status

Still in development.

## Author

Geno
