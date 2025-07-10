import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubsidyRecord {
  @Prop()
  year: number;

  @Prop()
  lowerLimit: number;

  @Prop()
  upperLimit: number;

  @Prop()
  subsidy: number;

  @Prop()
  uid: string;

  @Prop()
  type: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  center: string;

  @Prop({ type: Updated })
  updated: Updated;
}
export type SubsidyRecordDocument = SubsidyRecord & Document;
export const SubsidyRecordSchema = SchemaFactory.createForClass(SubsidyRecord);