import server from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8008;

server.listen(port, () => {
  console.log(`server listening in ${port} port`);
});
