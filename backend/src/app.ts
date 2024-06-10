import Express, { Request, Response } from "express";

const app = Express()

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("api's working")
})

export default app