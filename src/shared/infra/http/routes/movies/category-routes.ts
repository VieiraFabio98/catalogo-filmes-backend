import { Router } from "express";
import { CreateCategoryuseController } from "@modules/movies/use-cases/category/create/create-category-controller";


const categoryRoutes = Router()

const createCategoryController = new CreateCategoryuseController()

categoryRoutes.post('/', createCategoryController.handle)

export { categoryRoutes }