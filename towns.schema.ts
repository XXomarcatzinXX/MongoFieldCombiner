import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Buffer {
  @Prop()
  type: string;

  @Prop({ type: [any] })
  data: any[];
}

@Schema()
export class _id {
  @Prop({ type: Buffer })
  buffer: Buffer;
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
export class Town {
  @Prop({ type: _id })
  _id: _id;

  @Prop()
  name: string;

  @Prop()
  town_id: string;

  @Prop()
  state_id: string;

  @Prop()
  humansiteCode: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type TownDocument = Town & Document;
export const TownSchema = SchemaFactory.createForClass(Town);