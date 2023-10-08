import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  name?: string;
  rating?: number;
  site?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  lat?: number;
  lng?: number;
}
