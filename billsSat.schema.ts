import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  @Prop({ type: [any] })
  Nomina: any[];

  @Prop({ type: Tfd:TimbreFiscalDigital })
  tfd:TimbreFiscalDigital: Tfd:TimbreFiscalDigital;
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
  xmlns:xsi: string;

  @Prop()
  xmlns:nomina12: string;

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
  xmlns:cfdi: string;

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

  @Prop()
  TipoCambio: string;

  @Prop()
  Serie: string;

  @Prop()
  Folio: string;

  @Prop()
  xmlns:cartaporte30: string;
}

@Schema()
export class _declaration {
  @Prop()
  version: string;

  @Prop()
  encoding: string;
}

@Schema()
export class BillsSat {
  @Prop()
  uuid: string;

  @Prop({ type: Comprobante })
  Comprobante: Comprobante;

  @Prop()
  EfectoComprobante: string;

  @Prop()
  Estatus: string;

  @Prop()
  FechaCertificacionSat: string;

  @Prop()
  FechaEmision: string;

  @Prop()
  FechaPago: string;

  @Prop()
  FechaPagoT: number;

  @Prop()
  Monto: number;

  @Prop()
  NombreEmisor: string;

  @Prop()
  NombreReceptor: string;

  @Prop()
  RfcEmisor: string;

  @Prop()
  RfcPac: string;

  @Prop()
  RfcReceptor: string;

  @Prop({ type: _declaration })
  _declaration: _declaration;

  @Prop()
  companiesRecordId: string;

  @Prop()
  isr: number;

  @Prop()
  FechaPagoTOld: number;

  @Prop()
  FechaCancelacion: string;
}
export type BillsSatDocument = BillsSat & Document;
export const BillsSatSchema = SchemaFactory.createForClass(BillsSat);