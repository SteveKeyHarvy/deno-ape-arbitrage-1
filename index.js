import { Application } from "https://deno.land/x/oak@v3.0.0/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World 2nd attempt!";
});

await app.listen({ port: 8000 });