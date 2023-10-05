import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository";
import { HttpResponse } from "@shared/helpers";
import { inject, injectable } from "tsyringe";


@injectable()
class ListCategoryUseCase {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) { }

    async execute({ id }): Promise<HttpResponse> {
        if(!id){
            const result = await this.categoryRepository.listAll()
            .then(categoriaResult => {
            return categoriaResult
            })
            .catch(error => {
                return error
            })
            return result
        }
        
        const result = await this.categoryRepository.list({ id })
        .then(categoriaResult => {
            return categoriaResult
        })
        .catch(error => {
            return error
        })

        return result
    }
}
export { ListCategoryUseCase }