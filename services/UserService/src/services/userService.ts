import UserRepository from "../repositories/userRepository";

export default class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers(queryParams: any) {
        const users = await this.userRepository.findAll(queryParams);
        return users;
    }

    async getUser(id: number) {
        const user = await this.userRepository.findById(id);
        return user;
    }
}

