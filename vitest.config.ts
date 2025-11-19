import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,        // habilita describe, it, expect sem import
    environment: "node",  // necessário para supertest
    setupFiles: [],       // opcional
  },
});
