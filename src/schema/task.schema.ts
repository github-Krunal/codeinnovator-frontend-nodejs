import mongoose from "mongoose";
import { Task } from "../model/task.model";

export const TaskSchema = new mongoose.Schema({
  TaskName: {type:String},
  PlanID: {type:String},
  ContainerID: {type:String},
  });
  
  const taskSchemaModel = mongoose.model<Task>('Task', TaskSchema);
  export default taskSchemaModel;