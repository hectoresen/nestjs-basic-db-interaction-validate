import { IsNotEmpty ,Length } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty()

    @Length(1,5)

    name: string;
    price: number;
    description: string;
}
