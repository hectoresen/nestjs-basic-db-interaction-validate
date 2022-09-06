import { ItemsModule } from './items.module';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private ItemsModule: Model<ItemsDocument>,
  ){}

  async create(createItemDto: CreateItemDto) {
    const itemCreated = await this.ItemsModule.create(createItemDto)
    return itemCreated;
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
