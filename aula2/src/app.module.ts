import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessModule } from './access/access.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AccessModule],
})
export class AppModule {}
