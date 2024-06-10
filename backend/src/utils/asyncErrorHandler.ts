import ApiError from "@/utils/ApiError.ts"
import { Response, Request } from "express"

export default function asyncErrorHandler(myFunction: Function) {
    return (req: Request, res: Response) => myFunction().catch(
        (err: ApiError) => {
            res.status(err.statusCode || 500).json(
                {
                    message: err.message || "internal server error"
                }
            )
        }
    )
}

