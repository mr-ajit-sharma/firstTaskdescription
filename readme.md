# Task Management System API

This project implements a RESTful API using Node.js for managing tasks. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. Each task includes a title, description, creation date, and status.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Setup](#project-setup)
- [Database Schema Design](#database-schema-design)
- [API Endpoint Implementation](#api-endpoint-implementation)
- [Testing](#testing)
- [Documentation](#documentation)
- [Additional Considerations](#additional-considerations)

## Project Setup

1. Clone this repository `https://github.com/mr-ajit-sharma/firstTaskdescription.git`.
2. Install dependencies using `npm install`.
3. Set up a database instance ( MongoDB).
4. Configure database connection settings in `.env` file.
5. Run the application using `npm run dev`.

## Database Schema Design

The database schema includes the following fields for each task:

- ID: Unique identifier for the task.
- Title: Title of the task.
- Description: Description of the task.
- Creation Date: Date when the task was created.
- Status: Current status of the task (e.g., pending, in progress, completed).

Ensure proper indexing for performance optimization, especially for fields used for querying.

## API Endpoint Implementation

### Endpoints:

1. **POST /api/v1/task**: Create a new task.
2. **GET /api/v1/task**: Retrieve all tasks.
3. **GET /api/v1/task/:id**: Retrieve a single task by its ID.
4. **PUT /api/v1/task/:id**: Update a task by its ID.
5. **DELETE /api/v1/task/:id**: Delete a task by its ID.

### Business Logic:

- Input validation to check for invalid inputs.
- Error handling to manage different types of errors and return appropriate status codes and messages.

## Testing

1. Unit tests for each API endpoint.
2. Integration tests to test API endpoints with the database.

## Documentation

For detailed instructions on setting up and running the application, refer to the [Project Setup](#project-setup) section.

### API Endpoints:

1. **POST /api/tasks**:

   Create a new task.

   Example Request:
   ```json
   {
       "title": "Task Title",
       "description": "Task Description",
       "status": "pending"
   }
Example Response:

json
Copy code
{
    "id": "1",
    "title": "Task Title",
    "description": "Task Description",
    "creationDate": "2024-04-28T12:00:00Z",
    "status": "pending"
}
GET /api/tasks:Retrieve all tasks.Example Response:
json
Copy code
[
    {
        "id": "1",
        "title": "Task Title 1",
        "description": "Task Description 1",
        "creationDate": "2024-04-28T12:00:00Z",
        "status": "pending"
    },
    {
        "id": "2",
        "title": "Task Title 2",
        "description": "Task Description 2",
        "creationDate": "2024-04-29T12:00:00Z",
        "status": "in progress"
    }
]
GET /api/tasks/:id:Retrieve a single task by its ID.Example Response:
json
Copy code
{
    "id": "1",
    "title": "Task Title",
    "description": "Task Description",
    "creationDate": "2024-04-28T12:00:00Z",
    "status": "pending"
}
PUT /api/tasks/:id:Update a task by its ID.Example Request:
json
Copy code
{
    "status": "completed"
}
Example Response:
json
Copy code
{
    "id": "1",
    "title": "Task Title",
    "description": "Task Description",
    "creationDate": "2024-04-28T12:00:00Z",
    "status": "completed"
}
DELETE /api/tasks/:id:Delete a task by its ID.Example Response:
json
Copy code
{
    "message": "Task deleted successfully"
}