import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API documentation')
  .setDescription('test')
  .setVersion('1.0')
  .addTag('items')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('documentation', app, document);
  app.useGlobalPipes(new ValidationPipe()); //Hacer uso de las validaciones de DTO
  await app.listen(3000);
}
bootstrap();
