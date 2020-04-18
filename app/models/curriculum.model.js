module.exports = (sequelize, Sequelize) => {
    const Curricula = sequelize.define("curriculas", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: Sequelize.INTEGER
        },
        label: {
            type: Sequelize.STRING
        },

    });

    return Curricula;
};