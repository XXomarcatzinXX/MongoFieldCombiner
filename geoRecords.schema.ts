import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class NextIncidencesMap {

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
export class GeoRecords {
  @Prop()
  initDate: number;

  @Prop()
  endDate: number;

  @Prop()
  numberIncidence: number;

  @Prop()
  period: number;

  @Prop({ type: [] })
  idsIncidences: any[];

  @Prop()
  payroll: string;

  @Prop()
  calendar: number;

  @Prop({ type: NextIncidencesMap })
  nextIncidencesMap: NextIncidencesMap;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type GeoRecordsDocument = GeoRecords & Document;
export const GeoRecordsSchema = SchemaFactory.createForClass(GeoRecords);