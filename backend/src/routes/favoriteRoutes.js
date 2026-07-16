import { Router } from "express";
import authenticationToken from "../middlewares/authenticationToken.js";
import { addFavorite, getFavorites, removeFavorite } from "../controllers/favoriteController.js";

const favoriteRoutes = Router();

favoriteRoutes.use(authenticationToken);
favoriteRoutes.get("/", getFavorites);
favoriteRoutes.post("/:type/:id", addFavorite);
favoriteRoutes.delete("/:type/:id", removeFavorite);

export default favoriteRoutes;
