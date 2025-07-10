import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ImssRecord {
  @Prop()
  year: number;

  @Prop()
  fixedFee: number;

  @Prop()
  ensuredExcess: number;

  @Prop()
  bossExcess: number;

  @Prop()
  bossBenefits: number;

  @Prop()
  ensuredBenefits: number;

  @Prop()
  gmpBoss: number;

  @Prop()
  gmpEnsured: number;

  @Prop()
  ivaBoss: number;

  @Prop()
  ivaEnsured: number;

  @Prop()
  daycare: number;

  @Prop()
  retirement: number;

  @Prop()
  cyvBoss: number;

  @Prop()
  cyvEnsured: number;

  @Prop()
  infonavit: number;

  @Prop()
  uid: string;
}
export type ImssRecordDocument = ImssRecord & Document;
export const ImssRecordSchema = SchemaFactory.createForClass(ImssRecord);