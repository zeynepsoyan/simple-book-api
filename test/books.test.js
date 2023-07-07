const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/server");
const connectTestDb = require("./config/testDbConnection");

require("dotenv").config();

// Connecting to the database before all tests.
beforeAll(async () => {
    await connectTestDb();
});
  
// Closing database connection after all tests.
afterAll(async () => {
    await mongoose.connection.close();
    app.close();
});

describe("GET /api/books", () => {
    it("should return all books", async () => {
        const res = await request(app).get("/api/books");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("POST /api/books", () => {
    it("should create a book", async () => {
      const res = await request(app).post("/api/books").send({
        title: "Murder on the Orient Express",
        authorId: "64a72b4bff08decf4a1afd8b",
        price: 8.45,
        isbn: "978-0062073495",
        language: "English",
        pages: 288,
        publisher: "William Morrow Paperbacks"
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.book.title).toBe("Murder on the Orient Express");
    });
  });
  
describe("PUT /api/books/:isbn", () => {
    it("should update a book", async () => {
        const res = await request(app)
        .patch("/api/books/978-0062073495")
        .send({
            title: "Murder on the Orient Express",
            authorId: "64a72b4bff08decf4a1afd8b",
            price: 10.15,
            language: "English",
            pages: 288,
            publisher: "William Morrow Paperbacks"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.book.price).toBe(10.15);
    });
});

describe("DELETE /api/books/:isbn", () => {
    it("should delete a book", async () => {
        const res = await request(app).delete(
        "/api/books/978-0062073495"
        );
        expect(res.statusCode).toBe(200);
    });
});