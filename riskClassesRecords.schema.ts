import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Updated {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class RiskClassesRecord {
  @Prop()
  name: string;

  @Prop()
  satCode: string;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;
}
export type RiskClassesRecordDocument = RiskClassesRecord & Document;
export const RiskClassesRecordSchema = SchemaFactory.createForClass(RiskClassesRecord);