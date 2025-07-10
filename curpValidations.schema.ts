import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CurpValidation {
  @Prop()
  curp: string;

  @Prop()
  paternalSurname: string;

  @Prop()
  maternalSurname: string;

  @Prop()
  name: string;

  @Prop()
  gender: string;

  @Prop()
  birthDate: string;

  @Prop()
  Nationality: string;

  @Prop()
  DocProbatorio: number;

  @Prop()
  AnioReg: number;

  @Prop()
  numberActa: number;

  @Prop()
  NumEntidadReg: number;

  @Prop()
  CveMunicipioReg: number;

  @Prop()
  StatusCurp: string;

  @Prop()
  exist: boolean;
}
export type CurpValidationDocument = CurpValidation & Document;
export const CurpValidationSchema = SchemaFactory.createForClass(CurpValidation);