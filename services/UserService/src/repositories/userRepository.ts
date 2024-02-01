// services/UserService/src/repositories/userRepository.ts
import models from "../configs/connectDB";
import BaseRepository from "../../../../utils/baseRepository"

export default class UserRepository extends BaseRepository {
  private user = models.User;

  constructor() {
    super(models.User);
  }

  async findById(id: number) {
    const data = await this.user.findByPk(id);
    return data;
  }

  async findAll(queryParams: any) {
    const data = await this.user.findAll({
      where: {
        ...queryParams
      },
      // include: [
      //   {
      //     model: models.Role
      //   }
      // ]
    });
    return data;
  }
    
}
