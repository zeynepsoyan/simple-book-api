# Book-Author CRUD API
RESTful Book-Author Simple CRUD API using Node.js, MongoDB and Docker.


## Run it on your computer

Clone the project

```bash
  git clone https://github.com/zeynepsoyan/simple-book-api.git
```

Go to the project directory

```bash
  cd simple-book-api
```

Install required packages

```bash
  npm install
```

Run server 

```bash
  npm run dev
```

  
## API Usage

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