import { Request, Response } from 'express';

class UserController {
  
    public getAll(request: Request, response: Response) {
        try {
            //query db
            const user = [
                {name: "abc", xxx: "xxx"},
                {name: "abc", xxx: "xxx"}
            ]
            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}

export default UserController;
