import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class StreetType {
  @Prop()
  name: string;

  @Prop()
  key: string;

  @Prop()
  humansiteCode: number;
}
export type StreetTypeDocument = StreetType & Document;
export const StreetTypeSchema = SchemaFactory.createForClass(StreetType);