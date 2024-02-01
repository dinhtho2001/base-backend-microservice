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

    public async getUser(request: Request, response: Response) {
        try {
            const userId = request.params;
            const queryParam: any = {
                id: userId
            } ;
            const user = await userService.getUser(queryParam);
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
    
}

export default UserController;
