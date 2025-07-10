import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PaymentGroup {
  @Prop()
  name: string;
}
export type PaymentGroupDocument = PaymentGroup & Document;
export const PaymentGroupSchema = SchemaFactory.createForClass(PaymentGroup);