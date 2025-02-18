import express from "express";
import authController from "./../controllers/auth.controller"

const Router = express.Router();

// http://127.0.0.1:3000/api/v1/auth/login
Router.post("/auth/login", authController.funLogin);
Router.post("/auth/register", authController.funRegister);
Router.get("/auth/profile", authController.funPerfil);
Router.post("/auth/logout", authController.funLogout);

export default Router;