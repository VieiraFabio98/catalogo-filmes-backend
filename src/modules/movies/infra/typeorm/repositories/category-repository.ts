import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository";
import { Category } from "../entities/category";
import { Repository, getRepository } from "typeorm";
import { HttpResponse, ok } from "@shared/helpers";



class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category)
    }

    // create
    async create({
        id,
        category
    }: ICategoryDTO): Promise<HttpResponse> {

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

    //list
    async list({ id }: ICategoryDTO): Promise<HttpResponse> {
        try {
            const result = await this.repository.find({ id })

            return ok(result)
        } catch (error) {
            return error
        }
    }

    async listAll(): Promise<HttpResponse> {
        try {
            const result:any[] = await this.repository.createQueryBuilder("cat")
                .select([
                    "cat.id",
                    "cat.category"
                ])
                .getMany()

            return ok(result)
        } catch (error) {
            return error
        }
    }

}

export { CategoryRepository }