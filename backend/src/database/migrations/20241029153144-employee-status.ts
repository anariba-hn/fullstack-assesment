import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.addColumn('Employees', 'status', {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true
        });
    },

    down: async (queryInstance: QueryInterface) => {
        await queryInstance.removeColumn('Employees', 'status');
    }
};
