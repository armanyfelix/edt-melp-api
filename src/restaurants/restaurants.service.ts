import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, restaurants } from '@prisma/client';
import { StatisticsRestaurantsDto } from './dto/statistics-restaurants.dto';

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

  async findByArea(query: StatisticsRestaurantsDto) {
    console.log('query :>> ', query);
    return this.prisma
      .$queryRaw`SELECT * FROM restaurants WHERE ST_DWithin(geography(ST_MakePoint(lat,lng)),geography(ST_MakePoint(${query.longitude},${query.latitude})),${query.radius})`;
  }
}
