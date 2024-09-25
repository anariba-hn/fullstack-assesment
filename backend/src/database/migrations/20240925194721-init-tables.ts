import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable('Employee', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            hireDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            phone: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            departmentId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Department',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            }
        });

        await queryInterface.createTable('Department', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            }
        });
    },

    down: async (queryInstance: QueryInterface) => {
        await queryInstance.dropAllTables();
    }
};
