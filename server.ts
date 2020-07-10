// deno run --allow-net server.ts 

import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 2313 });
console.log("http://localhost:2313/");
for await (const req of s) {
  req.respond({ body: "Hello Worldzzzzz\n" });
}