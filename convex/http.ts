import { Hono } from "hono";
import { HonoWithConvex, HttpRouterWithHono } from "./lib/honoWithConvex";

const app: HonoWithConvex = new Hono();

// See the [Stack post on using Hono](https://stack.convex.dev)
app.get("/", async (c) => {
  return c.json("Hello world!");
});

export default new HttpRouterWithHono(app);
