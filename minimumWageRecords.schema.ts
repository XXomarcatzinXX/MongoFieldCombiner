import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Values {
  @Prop()
  A: number;

  @Prop()
  B: number;

  @Prop()
  ZONA-FRONTERIZA: number;
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
export class MinimumWageRecord {
  @Prop()
  year: number;

  @Prop()
  A: number;

  @Prop()
  B: number;

  @Prop()
  UMA: number;

  @Prop({ type: Values })
  values: Values;

  @Prop()
  applicationDate: number;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  uid: string;

  @Prop()
  NFD: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  center: string;
}
export type MinimumWageRecordDocument = MinimumWageRecord & Document;
export const MinimumWageRecordSchema = SchemaFactory.createForClass(MinimumWageRecord);