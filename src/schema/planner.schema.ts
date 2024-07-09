import mongoose from "mongoose";
import { Planner } from "../model/planner.model";
import { Task } from "../model/task.model";

export const PlannerSchema = new mongoose.Schema({
    Title: {type:String},
    Description: {type:String},
  });
  
  const plannerSchemaModel = mongoose.model<Planner>('Planner', PlannerSchema);
  export default plannerSchemaModel;