import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Messages, Message, MessageCreationRequest } from './messages.models';
import { MessagesService } from './messages.service';

@Controller({
    path: '/messages',
})
export class MessagesController {

    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    findAllByTopic(@Query('topicId') topicId: string): Messages {
        return this.messagesService.findAllByTopic(topicId);
    }

    @Post()
    create(@Body() messageCreationRequest: MessageCreationRequest): Message {
        return this.messagesService.create(messageCreationRequest);
    }
}
