import mongoose from "mongoose";
import { Task } from "../model/task.model";

export const TaskSchema = new mongoose.Schema({
    Title: {type:String},
    Description: {type:String},
  });
  
  const taskSchemaModel = mongoose.model<Task>('Task', TaskSchema);
  export default taskSchemaModel;