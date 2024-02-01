// services/UserService/src/config/connectDB.ts
import { Sequelize, DataTypes, Model  } from 'sequelize';
import User from '../models/User';
import Role from '../models/Role';
import Database from '../../../../config/sequelize';
import dotenv from 'dotenv';

dotenv.config();

const authenticateDatabase = async () => {
  await Database.authenticate('UserService');
};

authenticateDatabase();

const sequelize = Database.getInstance('UserService');

const models: any = {
  User: User(sequelize, DataTypes),
  Role: Role(sequelize, DataTypes),
};

Object.values(models).forEach((model: any) => {
  if (model?.associate) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
