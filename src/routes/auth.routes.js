import express from "express";
import authController from "./../controllers/auth.controller"
import authMiddleware from "../middlewares/auth.middleware";


const Router = express.Router();

// http://127.0.0.1:3000/api/v1/auth/login
Router.post("/login", authController.funLogin);
Router.post("/register", authController.funRegister);
Router.get("/profile", authMiddleware, authController.funPerfil);
Router.post("/logout", authController.funLogout);


export default Router;