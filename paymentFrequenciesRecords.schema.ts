import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PaymentFrequenciesRecord {
  @Prop()
  name: string;

  @Prop()
  days: number;

  @Prop()
  mensualizationFactor: number;

  @Prop()
  otherCharges: number;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  satCode: string;
}
export type PaymentFrequenciesRecordDocument = PaymentFrequenciesRecord & Document;
export const PaymentFrequenciesRecordSchema = SchemaFactory.createForClass(PaymentFrequenciesRecord);