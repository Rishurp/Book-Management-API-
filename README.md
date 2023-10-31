# Book-Management-API-
A RESTful API for managing a digital library of books. Create, retrieve, update, and delete books with ease. Built using Node.js and Express, with MongoDB as the database

## API Endpoints and Usage

### Create a Book

- **URL**: `/api/books`
- **Method**: `POST`
- **Request Body**: JSON object with the following properties: 
  - `author` (string, required): Author's name.
  - `title` (string, required): Book title.
  - `summary` (string, required): Book summary.
- **Response**: 
  - `201 Created` with the created book object.
  - `400 Bad Request` if the request body is missing required properties.
  Example Request:

  POST /books
  {
    "author": "John Doe",
    "title": "Sample Book",
    "summary": "This is a sample book."
  }

### Find a Book

- **URL**: `/books/:id`
- **Method**: `GET`
- **URL Parameter **: `id`(string, required): The unique identifier of the book.
- **Response**: 
  - `200 OK` with the book object if found.
  - `404 Not Found` if the book with the specified ID is not found.
  - `400 Bad Request` if there's an issue with the request or the book ID format.

Example Request:

GET /api/books/1234567890


### Find All Books

- **URL**: `/books`
- **Method**: `GET`
- **Response**: 
  - `200 OK` with an array of all books if found.
  - `200 OK` with a message "No books Yet in the Database" if there are no books in the database.
  - `500 Internal Server Error` if there's an issue with the server.

Example Request:
GET /books

### Update a Book

- **URL**: `/books/:id`
- **Method**: `PATCH`
- **URL Parameter**: `id`(string, required): The unique identifier of the book to update.
- **Request Body** : JSON object with properties you want to update (e.g.,`author`, `title`, `summary`).
- **Response**: 
  - `200 OK` with the updated book object if found and updated.
  - `404 Not Found` if the book with the specified ID is not found.
  - `400 Bad Request` if the request body is missing required properties.
  - `400 Bad Request`  if there's an issue with the request or the book ID format.

Example Request:

PATCH /books/1234567890
{
  "title": "Updated Book Title"
}


### Delete a Book

- **URL**: `/books/:id`
- **Method**: `DELETE`
- **URL Parameter **: `id`(string, required): The unique identifier of the book to delete.
- **Response**: 
  - `200 OK` with a message indicating the book was deleted if found and deleted.
  - `400 Bad Request`  if there's an issue with the request or the book ID format.
 
Example Request:

DELETE /books/1234567890

##Setup and Run Locally

Follow these instructions to set up and run the application on your local machine:

1. **Clone the repository** from GitHub to your local machine:
   git clone https://github.com/Rishurp/Book-Management-API-.git

2. Navigate to the project directory:
   cd Book-Management-API

3. Install dependencies using npm or yarn:
   npm install
   # or
  yarn install

4.Start the server:
  npm start

The application should now be running locally. You can access the API using the base URL (e.g., `http://localhost:3000/books`).

## Decisions and Assumptions

I have created this API with specific decisions and assumptions to shape the project. Here are some of them:

1. **Technology Stack**: I chose to build the API using Node.js and Express for their robustness and speed in handling HTTP requests. MongoDB was selected as the database for its flexibility and scalability.

2. **RESTful Design**: The API follows RESTful design principles, providing predictable and consistent endpoints for managing book data.

3. **Status Codes**: I've used standard HTTP status codes to convey the results of API requests, making it easier to understand the outcome of each operation.

4. **Data Validation**: It's assumed that input data, such as book details, will be validated on the client side before making requests to the API. However, I also implement server-side validation for additional security.

5. **Error Handling**: To provide helpful error messages, I've included detailed error responses, which can aid developers in diagnosing issues. I assume that these error responses will be used for debugging and troubleshooting.

6. **Local Development**: Instructions for setting up and running the API locally are provided in this README. It's assumed that you have Node.js and npm (or yarn) installed on your local machine.

7. **Database Setup**: It's assumed that the MongoDB database is configured and accessible. Please ensure that you've set up your database connection details in the project's configuration.

These decisions and assumptions guided the development of the "Book-Management-API."

















    
    
