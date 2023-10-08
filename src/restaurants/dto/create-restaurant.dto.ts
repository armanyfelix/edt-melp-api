import { IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  name: string;
  @IsNumber()
  rating: number;
  @IsString()
  site: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  street: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsNumber()
  lat: number;
  @IsNumber()
  lng: number;
}
