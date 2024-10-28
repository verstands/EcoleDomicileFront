import Repository from "../repository/inhumation.repository";
import { RepositoryConfigInterface } from "../interfaces/RepositoryConfig.interface";
import { VilleInterface } from "../interfaces/VilleINterface";

class VilleService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postVille(requestBody: VilleInterface): Promise<T> {
    try {
      const response = await this.postFind$("ville", requestBody);
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

  async getVille(): Promise<T> {
    try {
      const response = await this.find$("ville");
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

export default VilleService;