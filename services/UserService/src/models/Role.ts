
export default (sequelize: any, DataTypes: any) => {
  const Role = sequelize?.define("Role", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'roles',
  });
  
  if(Role){
    Role.associate = (models: any) => {
      Role.hasMany(models.User, { foreignKey: 'roleId' });
    };
  }
  
  return Role;
};
