import Repository from "../repository/inhumation.repository";
import { RepositoryConfigInterface } from "../interfaces/RepositoryConfig.interface";
import { PaysInterface } from "../interfaces/PaysInterface";

class PaysService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postPays(requestBody: PaysInterface): Promise<T> {
    try {
      const response = await this.postFind$("pays", requestBody);
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

  async getPays(): Promise<T> {
    try {
      const response = await this.find$("pays");
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

export default PaysService;