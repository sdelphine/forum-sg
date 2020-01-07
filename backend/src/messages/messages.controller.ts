import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Messages, Message, MessageCreationRequest } from './messages.models';
import { MessagesService } from './messages.service';

@Controller({
    path: '/messages',
})
export class MessagesController {

    constructor(private readonly messagesService: MessagesService) {}

    @Get()
    findAllByTopic(@Query('topicId') topicId: string, @Query('slug') slug: string): Messages {
        return this.messagesService.findAllBy(topicId, slug);
    }

    @Post()
    create(@Body() messageCreationRequest: MessageCreationRequest): Message {
        return this.messagesService.create(messageCreationRequest);
    }
}
