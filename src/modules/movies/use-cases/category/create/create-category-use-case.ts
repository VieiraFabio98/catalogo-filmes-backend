import { AppError } from "@shared/infra/errors/appError";
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository"
import { HttpResponse } from "@shared/helpers";
import { Category } from "@modules/movies/infra/typeorm/entities/category";

interface IRequest {
    category: string
}

@injectable()
class CreateCategoryuseCase {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ){}

    async execute({ category }: IRequest): Promise<Category> {

        const result = await this.categoryRepository.create({category})
        .then(categoryResult => {
            return categoryResult
        })
        .catch(error => {
            return error
        })

        return result
    }
}

export { CreateCategoryuseCase }