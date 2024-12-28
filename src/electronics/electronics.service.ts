import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Electronics } from './schemas/electronics.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class ElectronicsService {
  constructor(
    @InjectModel(Electronics.name)
    private readonly electronicsModel: Model<Electronics>,
  ) {}

  async create(data: any): Promise<Electronics> {
    const newItem = new this.electronicsModel(data);
    return newItem.save();
  }

  async findAll(): Promise<Electronics[]> {
    return this.electronicsModel.find().exec();
  }

  async findOne(id: string): Promise<Electronics> {
    return this.electronicsModel.findById(id).exec();
  }

  async update(id: string, data: any): Promise<Electronics> {
    return this.electronicsModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Electronics> {
    return this.electronicsModel.findByIdAndDelete(id).exec();
  }
}
