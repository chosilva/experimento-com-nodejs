import { createClient } from "redis";

const client = await createClient()
  .on("error", (err) => console.error)
  .connect();
