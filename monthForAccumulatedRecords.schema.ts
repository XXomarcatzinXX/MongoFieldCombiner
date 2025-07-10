import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MonthForAccumulatedRecord {
  @Prop()
  name: string;
}
export type MonthForAccumulatedRecordDocument = MonthForAccumulatedRecord & Document;
export const MonthForAccumulatedRecordSchema = SchemaFactory.createForClass(MonthForAccumulatedRecord);