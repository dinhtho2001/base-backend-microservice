export default class BaseRepository {
    model: any;

    constructor(model: any) {
        this.model = model;
    }

    async findAll(queryParams: any, limit?: number, offset?: number) {
        const queryDb: any = {
            where: {
                ...queryParams,
            },
            order: [["createdAt", "DESC"]],
            subQuery: false
        }
        if (offset) {
            queryDb.offset = offset;
        }
        if (limit) {
            queryDb.limit = limit;
        }
        const result = await this.model.findAll(queryDb);
        return result;
    }

    async findById(id: any, selectedFields?: any) {
        const data = await this.model.findOne({
            where: {
                id
            },
            attributes: selectedFields,
        });
        return data?.toJSON();
    }

    async create(data: any) {
        const newData = await this.model.create(data);
        return newData?.toJSON();
    }

    async update(data: any, queryParams: any) {
        const [updatedRowsCount, updatedRows] = await this.model.update(data, {
            where: { ...queryParams },
            returning: true,
        });
        return {
            updatedRowsCount,
            updatedRows,
        };
    }

    async delete(queryParams: any) {
        await this.model.destroy({
            where: {
                ...queryParams
            }
        });
    }

    async bulkCreate(data: any) {
        await this.model.bulkCreate(data);
    }
}
