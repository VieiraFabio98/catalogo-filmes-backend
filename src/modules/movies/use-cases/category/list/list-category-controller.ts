import { Request, Response } from "express"
import { ListCategoryUseCase } from "./list-category-use-case"
import { container } from "tsyringe"

class ListCategoryController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.body

        const listCategoryUseCase = container.resolve(ListCategoryUseCase)
        
        const result = await listCategoryUseCase.execute({ id })
        .then(categoryResult => {
            return categoryResult
        })
        .catch(error => {
            return error
        })

        return response.status(result.statusCode).json(result)
    }
}

export { ListCategoryController }