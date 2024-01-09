import * as Joi from "joi";
export default {
    createUser: Joi.object({
        username: Joi.string().required()
    }),
    updateUser: Joi.object({
    
    }), 
};
