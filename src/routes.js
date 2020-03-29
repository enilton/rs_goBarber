import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// routes.user(authMiddleware);
// a declaração acima, define que este middleware será chamado para todas as rotas
// abaixo dessa linha:

routes.put("/users", authMiddleware, UserController.update);

export default routes;
