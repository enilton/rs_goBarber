import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Tstew mome",
    email: "teste@teste.com.br",
    password_hash: "1231564361",
  });

  return res.json(user);
});

export default routes;
