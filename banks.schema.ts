import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
export class ExtraFields {
  @Prop()
  santander: string;

  @Prop()
  kuspit: string;

  @Prop()
  banorte: string;

  @Prop()
  azteca: string;

  @Prop()
  bancomer: string;

  @Prop()
  CAJA POP MEXICAN: string;
}

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
export class Bank {
  @Prop()
  name: string;

  @Prop()
  default: number;

  @Prop()
  cardCode: string;

  @Prop()
  icon: string;

  @Prop({ type: [any] })
  fields: any[];

  @Prop()
  uid: string;

  @Prop()
  hasLayout: boolean;

  @Prop()
  allowGenerate: boolean;

  @Prop()
  requestNumber: boolean;

  @Prop()
  allowRegister: boolean;

  @Prop()
  hasLayoutDispersion: boolean;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  satCode: string;

  @Prop({ type: ExtraFields })
  extraFields: ExtraFields;

  @Prop()
  center: string;

  @Prop()
  fileRoute: string;

  @Prop()
  accountLength: number;

  @Prop()
  fileRouteSpei: string;

  @Prop()
  emailRegex: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  santanderCode: string;
}
export type BankDocument = Bank & Document;
export const BankSchema = SchemaFactory.createForClass(Bank);