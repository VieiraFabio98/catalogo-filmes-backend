import { Router } from "express";
import { CreateCategoryController } from "@modules/movies/use-cases/category/create/create-category-controller";
import { ListCategoryController } from "@modules/movies/use-cases/category/list/list-category-controller";
import { UpdateCategoryController } from "@modules/movies/use-cases/category/update/update-category-controller";


const categoryRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const updateCategoryController = new UpdateCategoryController()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoryController.handle)
categoryRoutes.get('/list-all', listCategoryController.handle)
categoryRoutes.put('/:id', updateCategoryController.handle)

export { categoryRoutes }