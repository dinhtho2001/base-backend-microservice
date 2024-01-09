import { Request, Response } from 'express';
import * as userService from '../api-client/user';

class UserController {

    constructor() {

    }
  
    public async getAll(request: Request, response: Response) {
        try {
            const users = await userService.getUsers();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
    
}

export default UserController;
