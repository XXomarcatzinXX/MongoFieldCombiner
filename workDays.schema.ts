import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WorkDay {
  @Prop()
  name: string;

  @Prop()
  humansiteCode: number;
}
export type WorkDayDocument = WorkDay & Document;
export const WorkDaySchema = SchemaFactory.createForClass(WorkDay);