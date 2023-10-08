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
    const res = await this.prisma
      .$queryRaw`SELECT * FROM restaurants WHERE ST_DWithin(ST_MakePoint(restaurants.lat,restaurants.lng)::geography,ST_MakePoint(${query.latitude},${query.longitude})::geography,${query.radius});`;
    if (Array.isArray(res) && res.length > 0) {
      const count = res.length;
      const avg = res.reduce((a, b) => a + b.rating, 0) / count;
      const std = Math.sqrt(
        res.map((x) => Math.pow(x.rating - avg, 2)).reduce((a, b) => a + b) /
          count,
      );
      return { count, avg, std };
    } else {
      return {};
    }
  }
}
