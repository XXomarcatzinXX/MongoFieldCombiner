import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RequestLog {
  @Prop()
  host: string;

  @Prop()
  origin: string;

  @Prop()
  path: string;

  @Prop()
  date: number;
}
export type RequestLogDocument = RequestLog & Document;
export const RequestLogSchema = SchemaFactory.createForClass(RequestLog);