import Repository from '../repository/inhumation.repository';
import { RepositoryConfigInterface } from '../interfaces/RepositoryConfig.interface';


class LoginService<T> extends Repository<T> {
  constructor(config: RepositoryConfigInterface) {
    super(config);
  }
  async login(email: string, password: string): Promise<T> {
    const requestBody = { email, password };
    try {
      const response = await this.postFind$('auth/login', requestBody);
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
}

export default LoginService;