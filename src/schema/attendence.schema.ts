import mongoose from "mongoose";
import { Attendence } from "../model/attendence.model";

export const AttendenceSchema = new mongoose.Schema({
    User: {type:String},
    StartTime: {type:String},
    EndTime: {type:String},
  });
  const attendenceSchemaModel = mongoose.model<Attendence>('Attendence', AttendenceSchema);
  export default attendenceSchemaModel;