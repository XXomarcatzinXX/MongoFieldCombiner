import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Created {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class Updated {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class AccountingAccount {
  @Prop()
  companiesRecord: string;

  @Prop()
  payroll: string;

  @Prop({ type: [any] })
  debits: any[];

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  center: string;

  @Prop({ type: [any] })
  credits: any[];

  @Prop({ type: Updated })
  updated: Updated;

  @Prop({ type: [any] })
  layoutFields: any[];

  @Prop()
  fileName: string;

  @Prop()
  withSeparator: boolean;
}
export type AccountingAccountDocument = AccountingAccount & Document;
export const AccountingAccountSchema = SchemaFactory.createForClass(AccountingAccount);