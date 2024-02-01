export default {
    database: {
      dialect: "mysql"
    },
    jwtSecret: process.env.JWT_SECRET || 'yourjwtsecretkey',
  };
  