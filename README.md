# Book-Author CRUD API
RESTful Book-Author Simple CRUD API using Node.js, MongoDB and Docker.

## Prerequisites
- Git
- Docker

## Run it on your computer

Clone the project

```bash
  git clone https://github.com/zeynepsoyan/simple-book-api.git
```

Go to the project directory

```bash
  cd simple-book-api
```

Run Docker
```bash
  docker-compose up
```
  
## Seed DB
`seedAuthors.js` and `seedBooks.js` can be used to populate the DB with data.

To do so, update `CMD` in `Dockerfile` as follows:
```bash
CMD node src/config/seedAuthors.js && node src/server.js
```

Then: 
- Use the API to get authors created by MongoDB.
- Update the authorId fields in `seedBooks.js` with received authorIds.
- In the app's docker image terminal, run `npm run seed-books`.

## API Usage

#### Fetch all authors

```http
  GET /api/authors
```

#### Fetch all books

```http
  GET /api/books
```

#### Create a book

```http
  POST /api/books
```
 
#### Update a book via ISBN

```http
  PUT /api/books/:isbn
```

#### Delete a book via ISBN

```http
  DELETE /api/books/:isbn
```

## Test

```bash
npm run test
```