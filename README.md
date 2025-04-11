# RESTful API using Node.js and Express

A simple RESTful API built with Node.js and Express.js for managing user data with basic CRUD operations.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Express.js** (^5.1.0)
- **nodemon** (^3.1.9) - for development (optional)

### Install Dependencies

To install Express.js:
```bash
npm install express
```

To install nodemon globally (optional):
```bash
npm install -g nodemon
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NISHANT4510/RESTful-API-using-Node.js-and-Express
   ```
2. Navigate to the project directory:
   ```bash
   cd RESTful-API-using-NodeJS
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   - For production:
     ```bash
     node index.js
     ```
   - For development with auto-reload:
     ```bash
     nodemon index.js
     ```
2. The server will run on:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint       | Description                     |
|--------|----------------|---------------------------------|
| GET    | `/users`       | Fetch all users                |
| GET    | `/users/:id`   | Fetch a specific user by ID    |
| POST   | `/user`        | Create a new user              |
| PUT    | `/user/:id`    | Update an existing user        |
| DELETE | `/user/:id`    | Delete a user                  |

### Request Body Format

For POST and PUT requests:
```json
{
  "name": "John Doe"
}
```

## Features

- **Express.js middleware** for request logging
- **Data validation** for user inputs
- **Error handling** for invalid requests
- **RESTful architecture**

## Middleware

The API implements two middleware functions:

1. **Logger Middleware**: Logs HTTP method, URL, and status code.
2. **Validation Middleware**: Validates that the `name` field is present and not empty in the request body.

## Response Status Codes

- **200**: Successful request (GET, PUT, DELETE)
- **201**: Resource created successfully (POST)
- **400**: Missing required fields or invalid data format
- **404**: User not found

## Project Structure

```
├── index.js         # Main application file
├── logger.js        # Custom middleware functions
├── package.json     # Project dependencies
├── .gitignore       # Ignored files
└── README.md        # Project documentation
```

## Screenshots

Add screenshots of your API testing here. For example:
- **GET all users**:
  ![GET all users](screenshots/get-all-user.png)
- **GET user by ID**:
  ![GET user by ID](screenshots/particular-user-fetch.png)
- **Create user**:
  ![Create user](screenshots/post.png)
- **Update user**:
  ![Update user](screenshots/put.png)
- **Delete user**:
  ![Delete user](screenshots/delete.png)

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to build APIs.
- **Nodemon**: Development tool for auto-restarting the server.
- **JavaScript**: Programming language used for the API logic.

## License

This project is licensed under the ISC License.