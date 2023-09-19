## Note Taker

This is a simple note-taking application built using Express.js. It allows users to create, read, update, and delete notes.


## Installation


To install the dependencies, run the following command:
npm install

## Usage
To start the server, run the following command:
npm start
The server will start listening on port 3000. You can access the application by navigating to http://localhost:3000 in your web browser.


## Routes
The following routes are available in the application:
GET /: Displays the homepage of the application.
GET /notes: Displays the page for creating and viewing notes.
GET /api/notes: Returns a JSON array of all notes.
POST /api/notes: Creates a new note and returns the note as JSON.
DELETE /api/notes/:id: Deletes the note with the specified ID and returns a success message as JSON.


## Technologies Used
  *  Express.js
  *  Node.js
  *  HTML
  *  CSS
  *  JavaScript


## License
This project is licensed under the MIT License - see the LICENSE file for details
