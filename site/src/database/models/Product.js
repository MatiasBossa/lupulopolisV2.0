module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            allowNull: false,
            type: dataTypes.STRING
        },
        productImage: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
}