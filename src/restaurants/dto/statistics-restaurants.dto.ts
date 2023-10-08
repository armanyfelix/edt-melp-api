import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class StatisticsRestaurantsDto {
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  latitude?: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  longitude?: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  radius?: number;
}
