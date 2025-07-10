import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Guide {
  @Prop()
  faqID: string;

  @Prop()
  pregunta: string;

  @Prop()
  respuesta: string;

  @Prop()
  uid: string;
}
export type GuideDocument = Guide & Document;
export const GuideSchema = SchemaFactory.createForClass(Guide);