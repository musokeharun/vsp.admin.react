import StatusCodes from 'http-status-codes';
import {Request, Response} from 'express';
import storage, {bucket} from "../features/gcs";
import multer from "multer";

const {OK} = StatusCodes;

export async function listFolders(req: Request, res: Response) {

    const file = bucket.file('app.zip');
    file.createResumableUpload({origin: "http://127.0.0.1:3001"}, function (err, uri) {
        if (!err) {
            res.send(uri);
            // `uri` can be used to PUT data to.
        } else {
            console.log(err);
        }
    });
    //-
    // If the callback is omitted, we'll return a Promise.
    //-
    // file.createResumableUpload().then(function (data) {
    //     const uri = data[0];
    // });
    // return res.status(OK).json({});
}

export async function listBuckets(req: Request, res: Response) {
    const [buckets] = await storage.getBuckets();
    return res.json(buckets);
}

export function uploadOne(req: Request, res: Response) {

    // bucket.



    //TODO RETURN A RESUMEABLE URL
}

export function uploadMultiple() {

}
