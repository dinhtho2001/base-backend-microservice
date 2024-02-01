import { Sequelize, Options, Dialect } from 'sequelize';
import constants from '../utils/constants';
import dotenv from 'dotenv';

export default class Database {
  private static instances: Record<string, Sequelize> = {};

  private constructor() {
    //
  }

  private static getOptions(serviceName: string, dbName?: string): Options {
    dotenv.config({ path: `../services/${serviceName}/.env` });

    const supportedDialects: Dialect[] = ['mysql', 'postgres', 'sqlite'];
    const dialect: Dialect = (process.env.DB_DIALECT  || constants.database.dialect) as Dialect;

    if (!dialect || !supportedDialects.includes(dialect)) {
      throw new Error(`DB_DIALECT is not set or has an invalid value for service ${serviceName}`);
    }

    const config: any = {
      dialect,
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USER || 'init',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'init',
      port: parseInt(process.env.DB_PORT || '3306'),
    }

    if(dbName){
      config.database = dbName;
    }

    return config;
  }

  public static getInstance(serviceName: string): Sequelize {
    try {
      const key = serviceName;
      if (!Database.instances[key]) {
        const { database, username, password, ...config} = Database.getOptions(serviceName);
        Database.instances[key] = new Sequelize(database as string, username as string, password, { ...config });
      }

      return Database.instances[key];
    } catch (error) {
      console.error(`Error create Sequelize fot service ${serviceName}:`, error);
      throw error;
    }
  }

  public static async authenticate(serviceName: string, dbName?: string): Promise<void> {
    try {
      const sequelize = this.getInstance(serviceName);
      if (!sequelize) {
        throw new Error('Sequelize is not initialized');
      }

      const db = sequelize.config.username;
      if(db == 'init'){
        let { database, username, password, ...config} = Database.getOptions(serviceName);
        database = database as string;
        delete Database.instances[database];
        Database.instances[database] = new Sequelize(database, username as string, password, { ...config });
      }

      await sequelize.authenticate();
      console.log(`Connected to Database ${sequelize.config.database}`);

    } catch (error) {
      console.error(`Unable to connect to the database:`, error);
      throw error;
    }
  }
}
