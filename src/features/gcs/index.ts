import {Storage} from "@google-cloud/storage";
import path from "path";

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client using Application Default Credentials
// const storage = new Storage();

// Creates a client from a Google service account key

const keyFile = path.join(__dirname, `./${process.env.CLOUD_KEY_FILE}.json`);
let google_cloud_project = process.env.GOOGLE_CLOUD_PROJECT;
const storage = new Storage({keyFilename: keyFile, projectId: google_cloud_project});
let cloud_bucket = process.env.CLOUD_BUCKET || "";
export const bucket = storage.bucket(cloud_bucket);

export default storage;
