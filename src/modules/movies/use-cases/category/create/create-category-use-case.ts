import { AppError } from "@shared/infra/errors/appError";
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository"
import { HttpResponse, ok } from "@shared/helpers";
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

    async execute({ category }: IRequest): Promise<HttpResponse> {

        const result = await this.categoryRepository.create({category}).then(categoriaResult => {
            return categoriaResult
          })
          .catch(error => {
            return error
          })
        
          
        return ok(result)
    }
}

export { CreateCategoryuseCase }