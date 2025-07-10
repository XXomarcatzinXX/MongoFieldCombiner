import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Relationship {
  @Prop()
  name: string;

  @Prop()
  active: boolean;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  center: string;
}
export type RelationshipDocument = Relationship & Document;
export const RelationshipSchema = SchemaFactory.createForClass(Relationship);