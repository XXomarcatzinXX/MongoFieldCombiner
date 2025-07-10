import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class XmlSatMetasLog {
  @Prop()
  xmlStatus: string;

  @Prop()
  companiesRecordId: string;

  @Prop()
  center: string;

  @Prop()
  status: number;

  @Prop()
  endDate: number;

  @Prop()
  endFormat: string;

  @Prop()
  uid: string;

  @Prop()
  startDate: number;

  @Prop()
  error: string;

  @Prop()
  updated: string;

  @Prop()
  updatedMilli: number;

  @Prop()
  startFormat: string;

  @Prop()
  requestId: string;

  @Prop({ type: [any] })
  responseIds: any[];

  @Prop({ type: [any] })
  processed: any[];
}
export type XmlSatMetasLogDocument = XmlSatMetasLog & Document;
export const XmlSatMetasLogSchema = SchemaFactory.createForClass(XmlSatMetasLog);