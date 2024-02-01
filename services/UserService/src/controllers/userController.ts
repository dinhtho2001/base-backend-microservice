import { Request, Response } from 'express';
import UserService from "../services/userService";

export default class UserController {
    private userService = new UserService();

    public async getAll(request: Request, response: Response) {
        try {
            const users = await this.userService.getUsers({});
            return response.status(200).json(users);
        } catch (error) {
            console.error("Error in UserController.getAll:", error);
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }

    public async getUser(request: Request, response: Response) {
        try {
            const { userId } = request.query;
            const user = await this.userService.getUser(1);
            return response.status(200).json(user);
        } catch (error) {
            console.error("Error in UserController.getAll:", error);
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}