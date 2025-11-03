module.exports = (sequelize, DataTypes) => {
    const Music = sequelize.define('Music', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        genre: {
            type: DataTypes.STRING,
        },
        tahun: {
            type: DataTypes.INTEGER,
        },
    });
    return Music;
};