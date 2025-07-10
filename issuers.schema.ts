import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Issuer {
  @Prop()
  companiesRecord: string;

  @Prop()
  name: string;

  @Prop()
  folio: number;

  @Prop()
  uid: string;

  @Prop()
  folio2: string;

  @Prop()
  startAt: number;

  @Prop()
  endAt: number;
}
export type IssuerDocument = Issuer & Document;
export const IssuerSchema = SchemaFactory.createForClass(Issuer);