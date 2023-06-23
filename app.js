import Express from "express";
import main from "./src/db/main.js";
import dotenv from "dotenv";
import photo from "./src/routes/photo.js";

const app = Express();

dotenv.config();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use("/", photo);

app.listen(process.env.PORT, () => {
  console.log(`rodando na porta ${process.env.PORT}`);
});
