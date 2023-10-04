import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateCategoryuseCase } from "./create-category-use-case"

class CreateCategoryuseController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { category } = request.body

        const createCategoryuseCase = container.resolve(CreateCategoryuseCase)

        const result = await createCategoryuseCase.execute({
            category
        })
        .then(categoryResult => {
            return categoryResult
        })
        .catch(error => {
            return error
        })

        return response.status(result.statusCode).json(result)
    }
}

export { CreateCategoryuseController }
