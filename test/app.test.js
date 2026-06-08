const request = require("supertest");
const app = require("../server");

describe("App routes", () => {
  test("GET / returns welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Welcome to the sample CI/CD app");
  });

  test("GET /health returns ok", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("ok");
  });
});
