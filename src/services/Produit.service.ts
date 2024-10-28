import Repository from "../repository/inhumation.repository";
import { RepositoryConfigInterface } from "../interfaces/RepositoryConfig.interface";
import { ProduitInterface } from "../interfaces/ProduitInterface";

class ProduitService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postProduit(requestBody: ProduitInterface): Promise<T> {
    try {
      const response = await this.postFind$("produit", requestBody);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during get script request:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
      throw error;
    }
  }

  async getProduit(): Promise<T> {
    try {
      const response = await this.find$("produit");
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during get script request:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
      throw error;
    }
  }
}

export default ProduitService;