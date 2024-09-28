import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert('departments', [
            {
                name: 'IT',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Human Resources',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete('departments', {}, {});
    }
};
