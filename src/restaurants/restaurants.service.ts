import { Injectable } from '@nestjs/common';
// import { CreateRestaurantDto } from './dto/create-restaurant.dto';
// import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from '../prisma.service';
import { Prisma, restaurants } from '@prisma/client';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.restaurantsCreateInput): Promise<restaurants> {
    return await this.prisma.restaurants.create({ data });
  }

  async findAll() {
    return this.prisma.restaurants.findMany();
  }

  async findOne(id: string) {
    return this.prisma.restaurants.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: Prisma.restaurantsUpdateInput,
  ): Promise<restaurants> {
    console.log('data :>> ', data);
    return this.prisma.restaurants.update({
      data,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prisma.restaurants.delete({
      where: { id },
    });
  }
}
