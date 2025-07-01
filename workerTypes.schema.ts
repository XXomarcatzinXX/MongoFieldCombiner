import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WorkerType {
  @Prop()
  name: string;

  @Prop()
  humansiteCode: number;
}
export type WorkerTypeDocument = WorkerType & Document;
export const WorkerTypeSchema = SchemaFactory.createForClass(WorkerType);