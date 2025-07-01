import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ZipCodes {
  @Prop()
  cp: string;

  @Prop()
  neighborhood: string;

  @Prop()
  city: string;

  @Prop()
  name: string;

  @Prop()
  placeType: string;

  @Prop()
  town: string;

  @Prop()
  stateKey: string;

  @Prop()
  stateId: string;

  @Prop()
  townId: string;
}
export type ZipCodesDocument = ZipCodes & Document;
export const ZipCodesSchema = SchemaFactory.createForClass(ZipCodes);