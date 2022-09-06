import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop({required: true})
  name: string;

  @Prop({default: 0})
  price: number;

  @Prop()
  description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);