import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./update-category-use-case";
import { container } from "tsyringe";

class UpdateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { category } = request.body

        const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase)

        const result = await updateCategoryUseCase.execute({ id, category })
        .then(categoryResult => {
            return categoryResult
        })
        .catch(error => {
            return error
        })

        return response.status(result.statusCode).json(result)
    }
}

export { UpdateCategoryController }