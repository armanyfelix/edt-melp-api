import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { StatisticsRestaurantsDto } from './dto/statistics-restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get('/statistics')
  async statistics(
    @Query(new ValidationPipe({ transform: true }))
    query: StatisticsRestaurantsDto,
  ) {
    return this.restaurantsService.findByArea(query);
  }

  @Post()
  create(@Body(new ValidationPipe()) data: CreateRestaurantDto) {
    return this.restaurantsService.create(data);
  }

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) data: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(id);
  }
}
