import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class XmlSatMeta {
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

  @Prop()
  error: string;
}
export type XmlSatMetaDocument = XmlSatMeta & Document;
export const XmlSatMetaSchema = SchemaFactory.createForClass(XmlSatMeta);