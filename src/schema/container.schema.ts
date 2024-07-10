import mongoose from "mongoose";
import { Container } from "../model/container.model";

export const ContainerSchema = new mongoose.Schema({
    Name: {type:String},
    PlanID: {type:String},
  });
  
  const containerSchemaModel = mongoose.model<Container>('container', ContainerSchema);
  export default containerSchemaModel;