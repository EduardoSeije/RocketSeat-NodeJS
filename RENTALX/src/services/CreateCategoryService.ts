import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
// Definir o tipo de retorno. - ok
// Alterar o retorno de erro - ok 
// Acessar o repositório - ok
// Retornar algo - ok

class CreateCategoryService {
  private categoriesRepository: CategoriesRepository;
  constructor(categotriesRepository: CategoriesRepository) {
    this.categoriesRepository = categotriesRepository;
  }
  execute({description, name }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
  if (categoryAlreadyExists) {
    throw new Error("Category already exists!")
  }
  this.categoriesRepository.create({name, description});
  }
}


export { CreateCategoryService };