// @ts-ignore
import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
// @ts-ignore
import { test_order, create_order } from './controllers/controller.ts'
// @ts-ignore
import { serve } from "https://deno.land/std/http/server.ts";

serve((req) =>
  new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  })
);

const app = new Application();

// Static Files
app.static('/','./public');

// routes
app.get('/',async (ctx: Context) => {
    //console.log('Req Made')
    await ctx.file('./public/index.html')
});

app
    .get('/test',test_order)
    .post('/create_order',create_order)

// listen to port
app.start({ port: 8080 });

console.log('server is running!')