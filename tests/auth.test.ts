import request from "supertest";
import app from "../src/app";

describe("Auth", () => {
  it("deve bloquear login inválido", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: "email_incorreto@gmail.com",
        senha: "senha_errada"
      });

    expect(response.status).toBe(401);
  });
});
