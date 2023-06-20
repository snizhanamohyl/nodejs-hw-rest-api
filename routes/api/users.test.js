const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");
const { User } = require("../../models");

const { DB_HOST_TEST } = process.env;

describe("test login route", () => {
  let server = null;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(3000);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test correct login data", async () => {
    const loginData = {
      email: "user@gmail.com",
      password: "userpassword",
    };

    const { body, statusCode } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);

    expect(body.token).toBeTruthy();

    expect(body.user.email).toEqual(expect.any(String));
    expect(body.user.subscription).toEqual(expect.any(String));

    expect(body.user.email).toBe(loginData.email);

    const user = await User.findOne({ email: loginData.email });

    expect(body.user.email).toBe(user.email);
    expect(body.user.subscription).toBe(user.subscription);

    expect(body.token).toBe(user.token);
  });
});
