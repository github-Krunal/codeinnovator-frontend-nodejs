import mongoose from "mongoose";
import { RepositoryModel } from "../model/repository.model";

export const repositorySchema = new mongoose.Schema({
    Name: {type:String},
    Description: {type:String},
  });
  
  const repositorySchemaModel = mongoose.model<RepositoryModel>('repository', repositorySchema);
  export default repositorySchemaModel;