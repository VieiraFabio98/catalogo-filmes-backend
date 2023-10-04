import { HttpResponse } from "@shared/helpers"
import { Category } from "../infra/typeorm/entities/category"


interface ICategoryRepository{
    create({id, category}: ICategoryDTO): Promise<HttpResponse>
}

export { ICategoryRepository }

