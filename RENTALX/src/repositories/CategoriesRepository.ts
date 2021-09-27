import { Category } from "../model/category";

// DTO - Data transfer object 
interface IcreateCategoryDTO {
  name: string,
  description: string
}

class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  create({ description, name }: IcreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    
    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  };
};


export { CategoriesRepository };