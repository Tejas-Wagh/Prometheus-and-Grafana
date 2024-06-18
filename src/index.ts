import express from "express";
import { metricsMiddleware } from "./middleware";
import client from "prom-client";

const app = express();

app.use(metricsMiddleware);

app.get("/user", async (req, res) => {
  res.json({
    name: "Tejas Wagh",
    age: "23",
  });
});

app.get("/metrics", async (req, res) => {
  const metrics = await client.register.metrics();
res.set("Content-Type", client.register.contentType);
res.end(metrics);
});

app.listen(3000);
