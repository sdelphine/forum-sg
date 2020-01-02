import { Module } from '@nestjs/common';
import { TopicsModule } from './topics/topics.module';
import { TopicsService } from './topics/topics.service';
import { TopicsController } from './topics/topics.controller';
import { MessagesModule } from './messages/messages.module';
import { MessagesService } from './messages/messages.service';
import { MessagesController } from './messages/messages.controller';

@Module({
    imports: [
        TopicsModule,
        MessagesModule,
    ],
    controllers: [
        TopicsController,
        MessagesController,
    ],
    providers: [
        TopicsService,
        MessagesService,
    ],
})
export class AppModule {}
