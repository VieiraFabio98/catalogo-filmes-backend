import { HttpResponse } from "@shared/helpers"
import { Category } from "../infra/typeorm/entities/category"


interface ICategoryRepository{
    //create
    create({id, category}: ICategoryDTO): Promise<HttpResponse>

    //list
    list({ id }): Promise<HttpResponse>

    //list all
    listAll(): Promise<HttpResponse>
}

export { ICategoryRepository }

