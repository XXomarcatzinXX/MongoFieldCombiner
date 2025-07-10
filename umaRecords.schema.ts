import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UmaRecord {
  @Prop()
  year: number;

  @Prop()
  value: number;

  @Prop()
  applicationDate: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  center: string;
}
export type UmaRecordDocument = UmaRecord & Document;
export const UmaRecordSchema = SchemaFactory.createForClass(UmaRecord);