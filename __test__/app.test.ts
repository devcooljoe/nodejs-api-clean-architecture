import request from "supertest";
import app from "../src/app";

describe("User API", () => {
  it("Should return 200 for index of API", async () => {
    const res = await request(app)
      .get("/")
      .send();

    expect(res.status).toBe(200);
    expect(res.text).toBe('Welcome to API');
  });
});
