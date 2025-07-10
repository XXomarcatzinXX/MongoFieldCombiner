import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Created {
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
export class IsrRecord {
  @Prop()
  year: number;

  @Prop()
  lowerLimit: number;

  @Prop()
  upperLimit: number;

  @Prop()
  percentFee: number;

  @Prop()
  fixedFee: number;

  @Prop()
  type: string;

  @Prop()
  uid: string;

  @Prop({ type: Created })
  created: Created;

  @Prop({ type: Updated })
  updated: Updated;
}
export type IsrRecordDocument = IsrRecord & Document;
export const IsrRecordSchema = SchemaFactory.createForClass(IsrRecord);