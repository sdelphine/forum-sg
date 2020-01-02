import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TopicsService } from '../topics/topics.service';

@Module({
    controllers: [
        MessagesController,
    ],
    providers: [
        MessagesService,
        TopicsService,
    ],
})
export class MessagesModule {}
