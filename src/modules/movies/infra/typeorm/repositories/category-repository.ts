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

        try{
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

        } catch (error) {
            return error
        }
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

    //list all
    async listAll(): Promise<HttpResponse> {

        try {
            const result:any[] = await this.repository.createQueryBuilder("cat")
                .select([
                    "cat.id",
                    "cat.category"
                ])
                .orderBy("cat.category", "ASC")
                .getMany()

            return ok(result)
        } catch (error) {
            return error
        }
    }

    //update
    async update({id, category}): Promise<HttpResponse> {
        
        try {
            const findCategory = await this.repository.findOne(id)

            if(!findCategory){
                console.log("patient not found")
            }

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

            return ok(result)
            
        } catch (error) {
            return error
        }
    }

}

export { CategoryRepository }