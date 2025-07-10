import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PaymentForm {
  @Prop()
  key: string;

  @Prop()
  name: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;
}
export type PaymentFormDocument = PaymentForm & Document;
export const PaymentFormSchema = SchemaFactory.createForClass(PaymentForm);