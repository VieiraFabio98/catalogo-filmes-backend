import { CategoryRepository } from "@modules/movies/infra/typeorm/repositories/category-repository";
import { ICategoryRepository } from "@modules/movies/repositories/i-category-repository";
import { container } from "tsyringe"; 

container.registerSingleton<ICategoryRepository>('CategoryRepository', CategoryRepository)