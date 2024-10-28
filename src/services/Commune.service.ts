import Repository from "../repository/inhumation.repository";
import { RepositoryConfigInterface } from "../interfaces/RepositoryConfig.interface";
import { CommuneInterface } from "../interfaces/CommuneInterface";

class CommuneService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }

  async postCommune(requestBody: CommuneInterface): Promise<T> {
    try {
      const response = await this.postFind$("commune", requestBody);
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

  async getCommune(): Promise<T> {
    try {
      const response = await this.find$("commune");
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

export default CommuneService;