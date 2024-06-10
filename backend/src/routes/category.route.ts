import asyncErrorHandler from "@/utils/asyncErrorHandler.ts"
import categoryModel from "@/models/category.model.ts"

const createNew = asyncErrorHandler(
    async (req: Request, res: Response) => {

        const { name } = req.body
        const category = await categoryModel.create({ name })
        res.status(201).json(category)

    }
)

