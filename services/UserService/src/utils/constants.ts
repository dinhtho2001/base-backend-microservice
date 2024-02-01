export default {
    baseUrl: process.env.URL || "http://localhost:3004",
    database: {
      config: {
        name: process.env.DEMO_DB_NAME || "demo"
      },
      url: process.env.DEMO_DB_URL || "mysql://localhost:3306/manager_coffee",
    }
  };
  