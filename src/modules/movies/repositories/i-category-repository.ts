import { Category } from "../infra/typeorm/entities/category"


interface ICategoryRepository{
    create({id, category}: ICategoryDTO): Promise<Category>
}

export { ICategoryRepository }

