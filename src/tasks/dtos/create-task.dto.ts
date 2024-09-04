import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'content must be a string' })
  content: string;
}