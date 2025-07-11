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
export class RpIdseRecord {
  @Prop()
  center: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;
}
export type RpIdseRecordDocument = RpIdseRecord & Document;
export const RpIdseRecordSchema = SchemaFactory.createForClass(RpIdseRecord);