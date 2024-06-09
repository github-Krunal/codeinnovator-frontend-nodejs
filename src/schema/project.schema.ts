import mongoose from "mongoose";
import { Project } from "../model/project.model";

export const ProjectSchema = new mongoose.Schema({
    Name: {type:String},
    Description: {type:String},
  });
  
  const projectSchemaModel = mongoose.model<Project>('Project', ProjectSchema);
  export default projectSchemaModel;