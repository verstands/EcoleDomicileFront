import Repository from "../repository/inhumation.repository";
import { RepositoryConfigInterface } from "../interfaces/RepositoryConfig.interface";
import { PharmacieINterface } from "../interfaces/PharmacieInterface";

class QuartierService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postQaurtier(requestBody: PharmacieINterface): Promise<T> {
    try {
      const response = await this.postFind$("quartier", requestBody);
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

  async getQuartierCommune(id :string): Promise<T> {
    try {
      const response = await this.find$(`quartier/commune/${id}`);
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

  async getQuartier(): Promise<T> {
    try {
      const response = await this.find$("quartier");
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

export default QuartierService;