// src/index.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Project } from './src/model/project.model';
import projectSchemaModel from './src/schema/project.schema';
import { ObjectId } from 'mongodb';
import appsSchemaModel from './src/schema/apps.schema';
import taskSchemaModel from './src/schema/task.schema';
import { Task } from './src/model/task.model';


var cors = require('cors')

const app = express();
app.use(cors())

const port = 4000;

// Middleware to parse JSON
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/codeInnovator').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});


app.post('/api/projectadd', async(req: Request, res: Response) => {
    const project:Project = req.body;
   let result= await projectSchemaModel.collection.insertOne(project);
  res.send(result);
});
app.get('/api/projectlist', async(req: Request, res: Response) => {
   let result= await projectSchemaModel.collection.find().toArray()
  res.json(result);
});
app.delete('/api/projectdelete/:id', async(req: Request, res: Response) => {
  const id = req.params.id;
   let result= await projectSchemaModel.collection.deleteOne({ _id: new ObjectId(id) })
  res.json(result);
});

app.get('/api/getApps', async(req: Request, res: Response) => {
 let result= await appsSchemaModel.collection.find().toArray()
res.send(result);
});

app.post('/api/addTask', async(req: Request, res: Response) => {
  const task:Task = req.body;
 let result= await taskSchemaModel.collection.insertOne(task);
res.send(result);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
