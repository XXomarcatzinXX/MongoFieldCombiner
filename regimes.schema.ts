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
export class Regime {
  @Prop()
  name: string;

  @Prop()
  code: number;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop({ type: Created })
  created: Created;
}
export type RegimeDocument = Regime & Document;
export const RegimeSchema = SchemaFactory.createForClass(Regime);