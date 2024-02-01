
export default (sequelize: any, DataTypes: any) => {
    const User = sequelize?.define("User", {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE(),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE(),
        allowNull: true,
      },
      roleId: {
        type: DataTypes.INTEGER()
      },
    },
    {
      tableName: 'users',
    }
    );
    
    if(User){
      User.associate = (models: any) => {
        User.belongsTo(models.Role, { foreignKey: 'roleId' });
      };
    }
    
    return User;
};

