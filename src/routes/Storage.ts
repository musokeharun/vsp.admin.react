import {Router} from "express";
import {listBuckets, listFolders} from "../Services/storage";
import {OK} from "http-status-codes";

const storageRouter = Router();
storageRouter.all("/", ((req, res) => {
    res.status(OK).send("Welcome to the Storage Api")
}))
storageRouter.get("/list", listFolders);
storageRouter.get("/buckets", listBuckets);
storageRouter.get("/")


export default storageRouter;