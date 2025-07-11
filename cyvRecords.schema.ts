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
export class RpIdseRecord {
  @Prop()
  measure: string;

  @Prop()
  upperLimit: number;

  @Prop()
  year: number;

  @Prop()
  percentFee: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  center: string;
}
export type RpIdseRecordDocument = RpIdseRecord & Document;
export const RpIdseRecordSchema = SchemaFactory.createForClass(RpIdseRecord);