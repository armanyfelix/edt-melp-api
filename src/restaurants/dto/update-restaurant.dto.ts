import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsInt, IsNumber, IsString, Max, Min } from 'class-validator';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  @IsString()
  name?: string;
  @IsInt()
  @Min(0)
  @Max(4)
  rating?: number;
  @IsString()
  site?: string;
  @IsString()
  email?: string;
  @IsString()
  phone?: string;
  @IsString()
  street?: string;
  @IsString()
  city?: string;
  @IsString()
  state?: string;
  @IsNumber()
  lat?: number;
  @IsNumber()
  lng?: number;
}
