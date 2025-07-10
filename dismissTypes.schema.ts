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
export class DismissType {
  @Prop()
  name: string;

  @Prop()
  humansiteCode: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  defaultStatus: number;

  @Prop()
  disableNotification: boolean;

  @Prop({ type: Updated })
  updated: Updated;
}
export type DismissTypeDocument = DismissType & Document;
export const DismissTypeSchema = SchemaFactory.createForClass(DismissType);