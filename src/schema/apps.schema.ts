import mongoose from "mongoose";
import { Apps } from "../model/apps.model";

export const AppsSchema = new mongoose.Schema({
    Name: {type:String},
    Description: {type:String},
    ImageURL: {type:String},
    IsVisible:{type:Boolean}
  });
  
  const appsSchemaModel = mongoose.model<Apps>('Apps', AppsSchema);
  export default appsSchemaModel;