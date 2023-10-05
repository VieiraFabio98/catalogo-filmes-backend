import { Router } from "express";
import { CreateCategoryuseController } from "@modules/movies/use-cases/category/create/create-category-controller";
import { ListCategoryController } from "@modules/movies/use-cases/category/list/list-category-controller";


const categoryRoutes = Router()

const createCategoryController = new CreateCategoryuseController()
const listCategoryController = new ListCategoryController()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoryController.handle)
categoryRoutes.get('/list-all', listCategoryController.handle)

export { categoryRoutes }