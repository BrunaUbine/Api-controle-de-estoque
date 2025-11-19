import request from "supertest";
import app from "../src/app";

describe("Produtos", () => {
  it("deve exigir token ao listar produtos", async () => {
    const response = await request(app).get("/produtos");
    expect(response.status).toBe(401);
  });
});
