import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Union {
  @Prop()
  name: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;
}
export type UnionDocument = Union & Document;
export const UnionSchema = SchemaFactory.createForClass(Union);