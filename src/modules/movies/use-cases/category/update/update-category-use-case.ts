import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository";
import { HttpResponse } from "@shared/helpers";
import { inject, injectable } from "tsyringe";


@injectable()
class UpdateCategoryUseCase {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ){}

    async execute({ 
        id, 
        category }): Promise<HttpResponse> {
            const result = await this.categoryRepository.update({ id, category })
            .then(categoryResult => {
                return categoryResult
            })
            .catch(error => {
                return error
            })

            return result

    }
}

export { UpdateCategoryUseCase }