# Analysis Dashboard
This is a full-stack project for an Analysis Dashboard.
The project uses React for the frontend, Django for the backend, PostgreSQL as the database,
Playwright for testing, Mock Service Worker for mocking the backend during development and tests,
and GitHub Actions for CI, The application is containerized using Docker and Docker Compose.
Celery is also implemented in the project to handle asynchronous tasks and background processing.


## Technologies
- Frontend: React
- Backend: Django
- Database: PostgreSQL
- Testing: Playwright
- Mocking: Mock Service Worker
- CI: GitHub Actions
- Containerization: Docker and Docker Compose
- Task Queue: Celery


## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

## Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Clone the Repository

### Setup Environment Variables
Copy the examples environment variables files and rename it to .env

### Build and Run Containers
``` sh
docker-compose up --build
```


### Backend Setup
```sh
docker-compose exec backend python manage.py migrate
```

### Populating the Database
```sh
docker-compose exec backend python populate.py
```









