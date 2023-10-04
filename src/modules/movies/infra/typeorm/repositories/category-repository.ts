import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository";
import { Category } from "../entities/category";
import { Repository, getRepository } from "typeorm";



class CategoryRepository implements ICategoryRepository{

    private repository: Repository<Category>

    constructor(){
        this.repository = getRepository(Category)
    }

    // create
    async create({
        id, 
        category
    }: ICategoryDTO): Promise<Category> {

        const newCategory = this.repository.create({
            id, 
            category
        })

        const result = await this.repository.save(newCategory)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })

        return result
    } 

}

export { CategoryRepository }