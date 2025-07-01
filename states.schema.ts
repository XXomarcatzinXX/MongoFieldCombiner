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
export class State {
  @Prop()
  name: string;

  @Prop()
  key: string;

  @Prop()
  humansiteCode: string;

  @Prop()
  uid: string;

  @Prop()
  satCode: string;

  @Prop({ type: Updated })
  updated: Updated;
}
export type StateDocument = State & Document;
export const StateSchema = SchemaFactory.createForClass(State);