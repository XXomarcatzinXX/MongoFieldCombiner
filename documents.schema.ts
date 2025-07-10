import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Document {
  @Prop()
  type: string;

  @Prop()
  center: string;

  @Prop()
  employee: string;

  @Prop()
  employeeName: string;

  @Prop()
  employeeNss: string;

  @Prop()
  payroll: string;

  @Prop()
  documentType: string;

  @Prop()
  startDate: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  content: string;

  @Prop()
  active: boolean;

  @Prop()
  endDate: number;

  @Prop()
  duration: number;

  @Prop()
  comments: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  motive: string;

  @Prop()
  signed: boolean;

  @Prop()
  motiveFrom: string;

  @Prop()
  domicilioBeneficiario: string;

  @Prop()
  jornadaLaboralDiaria: number;

  @Prop()
  inicioPrimerTurno: string;

  @Prop()
  finPrimerTurno: string;

  @Prop()
  inicioSegundoTurno: string;

  @Prop()
  finSegundoTurno: string;

  @Prop()
  inicioComida: string;

  @Prop()
  finComida: string;

  @Prop()
  diaDeDescanso: string;

  @Prop()
  diaDePago: string;
}
export type DocumentDocument = Document & Document;
export const DocumentSchema = SchemaFactory.createForClass(Document);