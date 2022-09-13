import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required: true})
    name: string;

    @Prop({unique: true})
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);