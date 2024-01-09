export default {
    server: {
      port: process.env.PORT || 3003,
      host: process.env.HOST || 'localhost',
    },
    database: {
      url: process.env.DB_URL || 'mysql://localhost:3306/mydatabase',
    },
    jwtSecret: process.env.JWT_SECRET || 'yourjwtsecretkey',
  };
  