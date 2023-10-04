import { Router } from "express";
import { categoryRoutes } from "./movies/category-routes";


const router = Router()

router.use('/category', categoryRoutes)


export { router }
