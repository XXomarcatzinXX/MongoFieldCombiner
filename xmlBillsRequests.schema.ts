import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class XmlBillsRequest {
  @Prop()
  uuid: string;

  @Prop()
  sat: boolean;

  @Prop()
  satStatus: string;

  @Prop()
  satTotal: number;

  @Prop()
  satFechaPago: string;

  @Prop()
  satFechaEmision: string;

  @Prop()
  system: boolean;

  @Prop()
  tdsStatus: string;

  @Prop()
  tdsTotal: string;

  @Prop()
  tdsFechaPago: string;

  @Prop()
  tdsPeriod: number;

  @Prop()
  tdsAccuDate: number;

  @Prop()
  result: number;

  @Prop()
  msg: string;

  @Prop()
  companiesRecord: string;

  @Prop()
  month: number;

  @Prop()
  year: number;

  @Prop()
  finishedTime: number;

  @Prop()
  isr: number;
}
export type XmlBillsRequestDocument = XmlBillsRequest & Document;
export const XmlBillsRequestSchema = SchemaFactory.createForClass(XmlBillsRequest);