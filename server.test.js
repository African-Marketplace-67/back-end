const request = require("supertest");
const server = require("./api/server");
const db = require("./database/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db("users").del();
});
afterAll(async () => {
  await db.destroy();
});
const user = {
  username: "mark",
  password: "1234",
  email: "test@test.com",
  role:1
};

const login = {
  username: "mark",
  password: "1234",
};

test("sanity", () => {
  expect(true).toBe(true);
});

describe("[POST] /auth/register", () => {
  it("Register a new user", async () => {
    const response = await request(server).post("/auth/register").send(user);
    expect(response.body.Message).toBe("user mark created! ");
  });
  it("Bad register attempt", async () => {
    const response = await request(server).post("/auth/register").send(login);
    console.log(response.body);
    expect(response.body).toBe(
      'username and password required '
    );
  });
});

describe("[POST] /auth/login", () => {
  it("Log's in a user", async () => {
    await request(server).post("/auth/register").send(user);
    const response = await request(server).post("/auth/login").send(login);
    expect(response.body).toHaveProperty("token");
  });
  it("Bad Login", async () => {
    const response = await request(server).post("/auth/login").send(user);
    expect(response.body.Message).toBe(
      "invalid credentials"
    );
  });
});

