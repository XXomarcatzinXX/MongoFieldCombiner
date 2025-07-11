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
export class BankAccount {
  @Prop()
  companiesRecord: string;

  @Prop()
  name: string;

  @Prop()
  folio: number;

  @Prop()
  uid: string;

  @Prop()
  issuer: string;

  @Prop()
  couldEmmit: boolean;

  @Prop()
  bank: string;

  @Prop()
  product: string;

  @Prop()
  status: boolean;

  @Prop()
  center: string;

  @Prop()
  endAt: number;

  @Prop()
  startAt: number;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  productType: string;

  @Prop()
  subproduct: string;

  @Prop()
  clientType: string;

  @Prop()
  branchOffice: string;

  @Prop()
  deliverOffice: string;

  @Prop()
  chargeAccount: string;

  @Prop()
  noEmpresa: number;

  @Prop()
  rfcEmpresa: string;

  @Prop()
  tipoServicio: number;

  @Prop()
  sucursalEnvio: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  isSpei: boolean;

  @Prop()
  accountCharge: string;

  @Prop()
  fileRouteSpei: string;

  @Prop()
  fileRoute: string;

  @Prop()
  account: string;

  @Prop()
  clientNumber: string;

  @Prop()
  loadAccountNumber: string;

  @Prop()
  nameLoadAccountNumber: string;

  @Prop()
  rfcHolder: string;

  @Prop()
  beneficiaryAccountType: number;

  @Prop()
  chargeLegend: string;

  @Prop()
  paymentLegend: string;

  @Prop()
  affinityGroup: string;

  @Prop()
  reference: string;
}
export type BankAccountDocument = BankAccount & Document;
export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);