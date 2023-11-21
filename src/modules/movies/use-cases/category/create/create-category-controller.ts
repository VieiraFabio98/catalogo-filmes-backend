import { Request, Response } from "express"
import { CreateCategoryuseCase } from "./create-category-use-case"
import { container } from "tsyringe"


class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { category } = request.body

        const createCategoryUseCase = container.resolve(CreateCategoryuseCase)

        const result = await createCategoryUseCase.execute({
            category
        })

        return response.status(201).json(result)
    }
}

export { CreateCategoryController }