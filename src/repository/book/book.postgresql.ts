import { DataTypes, Model, Sequelize } from "sequelize";
import { DB_TABLE_NAMES } from "../../helpers/constants";

class Book extends Model {
    public title!: string;

    public author!: string;
}

const BookModel = (sequelizeInstance: Sequelize) => {
    Book.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: sequelizeInstance,
            tableName: DB_TABLE_NAMES.BOOK,
        },
    );

    return Book;
};

export default BookModel;
