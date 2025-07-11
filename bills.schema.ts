import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class _declaration {
  @Prop()
  version: string;

  @Prop()
  encoding: string;
}

@Schema()
export class Emisor {
  @Prop()
  Rfc: string;

  @Prop()
  Nombre: string;

  @Prop()
  RegimenFiscal: string;
}

@Schema()
export class Receptor {
  @Prop()
  Rfc: string;

  @Prop()
  Nombre: string;

  @Prop()
  DomicilioFiscalReceptor: string;

  @Prop()
  RegimenFiscalReceptor: string;

  @Prop()
  UsoCFDI: string;
}

@Schema()
export class Concepto {
  @Prop()
  ClaveProdServ: string;

  @Prop()
  Cantidad: string;

  @Prop()
  ClaveUnidad: string;

  @Prop()
  Descripcion: string;

  @Prop()
  ValorUnitario: string;

  @Prop()
  Importe: string;

  @Prop()
  Descuento: string;

  @Prop()
  ObjetoImp: string;
}

@Schema()
export class Conceptos {
  @Prop({ type: Concepto })
  Concepto: Concepto;
}

@Schema()
export class Tfd:TimbreFiscalDigital {
  @Prop()
  xsi:schemaLocation: string;

  @Prop()
  Version: string;

  @Prop()
  UUID: string;

  @Prop()
  FechaTimbrado: string;

  @Prop()
  RfcProvCertif: string;

  @Prop()
  SelloCFD: string;

  @Prop()
  NoCertificadoSAT: string;

  @Prop()
  SelloSAT: string;

  @Prop()
  xmlns:tfd: string;

  @Prop()
  xmlns:xsi: string;
}

@Schema()
export class Complemento {
  @Prop({ type: Tfd:TimbreFiscalDigital })
  tfd:TimbreFiscalDigital: Tfd:TimbreFiscalDigital;

  @Prop({ type: [any] })
  Nomina: any[];
}

@Schema()
export class CfdiRelacionado {
  @Prop()
  UUID: string;
}

@Schema()
export class CfdiRelacionados {
  @Prop()
  TipoRelacion: string;

  @Prop({ type: CfdiRelacionado })
  CfdiRelacionado: CfdiRelacionado;
}

@Schema()
export class Comprobante {
  @Prop()
  xmlns:cfdi: string;

  @Prop()
  xmlns:xsi: string;

  @Prop()
  xsi:schemaLocation: string;

  @Prop()
  Version: string;

  @Prop()
  Fecha: string;

  @Prop()
  Sello: string;

  @Prop()
  NoCertificado: string;

  @Prop()
  Certificado: string;

  @Prop()
  SubTotal: string;

  @Prop()
  Descuento: string;

  @Prop()
  Moneda: string;

  @Prop()
  Total: string;

  @Prop()
  TipoDeComprobante: string;

  @Prop()
  Exportacion: string;

  @Prop()
  MetodoPago: string;

  @Prop()
  LugarExpedicion: string;

  @Prop()
  xmlns:nomina12: string;

  @Prop({ type: Emisor })
  Emisor: Emisor;

  @Prop({ type: Receptor })
  Receptor: Receptor;

  @Prop({ type: Conceptos })
  Conceptos: Conceptos;

  @Prop({ type: Complemento })
  Complemento: Complemento;

  @Prop()
  FormaPago: string;

  @Prop({ type: CfdiRelacionados })
  CfdiRelacionados: CfdiRelacionados;
}

@Schema()
export class Bill {
  @Prop()
  accuPeriod: number;

  @Prop()
  billingDate: number;

  @Prop()
  calendar: number;

  @Prop()
  cc: string;

  @Prop()
  center: string;

  @Prop()
  dispersionId: string;

  @Prop()
  employeeId: string;

  @Prop()
  end: number;

  @Prop()
  forceBillingDate: number;

  @Prop()
  opType: string;

  @Prop()
  operationId: string;

  @Prop()
  payrollId: string;

  @Prop()
  period: number;

  @Prop()
  rpId: string;

  @Prop()
  start: number;

  @Prop()
  userId: string;

  @Prop()
  accuPeriodEnd: number;

  @Prop()
  accuPeriodStart: number;

  @Prop()
  rfc: string;

  @Prop()
  employeeName: string;

  @Prop()
  ccName: string;

  @Prop()
  specialServices: boolean;

  @Prop()
  firm: string;

  @Prop({ type: [any] })
  companies: any[];

  @Prop()
  companiesRecordId: string;

  @Prop()
  realPaymentDate: number;

  @Prop()
  regimeCode: string;

  @Prop()
  expeditionPlace: string;

  @Prop()
  fiscalRegime: string;

  @Prop()
  regimeType: string;

  @Prop()
  paymentFrequency: string;

  @Prop()
  payrollInfo: string;

  @Prop()
  class: string;

  @Prop()
  uuid: string;

  @Prop({ type: _declaration })
  _declaration: _declaration;

  @Prop({ type: Comprobante })
  Comprobante: Comprobante;

  @Prop()
  xmlUrl: string;

  @Prop()
  qrUrl: string;

  @Prop()
  fileName: string;

  @Prop()
  created_at: string;

  @Prop()
  status: string;

  @Prop()
  accuDate: number;

  @Prop()
  specialDate: number;

  @Prop()
  specialPeriod: number;

  @Prop()
  emailId: string;

  @Prop()
  sentEmail: string;

  @Prop()
  sentStatus: string;

  @Prop()
  sentTime: number;

  @Prop()
  sentMsg: string;

  @Prop()
  lastFileName: string;

  @Prop()
  calendar_b: string;

  @Prop()
  calculationsCount: number;

  @Prop()
  error: boolean;

  @Prop()
  errorMsg: string;

  @Prop()
  replaceThis: string;

  @Prop()
  satContractType: string;

  @Prop()
  replacedWith: string;

  @Prop()
  cancelError: string;

  @Prop()
  cancelBill: string;

  @Prop()
  cancelledBy: string;

  @Prop()
  cancelledByName: string;

  @Prop()
  restoredFromCode: number;

  @Prop()
  insertedBySystem: boolean;

  @Prop()
  uid: string;
}
export type BillDocument = Bill & Document;
export const BillSchema = SchemaFactory.createForClass(Bill);