import { Injectable } from '@nestjs/common';
import { Messages, MessageCreationRequest, Message } from './messages.models';
import { TopicsService } from '../topics/topics.service';

@Injectable()
export class MessagesService {

    private messages = [
        { id: 'SCQDSQ', message: 'ZVCER', topicId: 'ERERER', createdAt: new Date(), creator: 'User1' },
        { id: 'SDFVDV', message: 'VSDSFQCES', topicId: 'SDFDFSDF', createdAt: new Date(), creator: 'User2' },
    ];

    constructor(private readonly topicsService: TopicsService) { }

    findAllByTopic(topicId: string): Messages {
        return this.messages.filter(message => message.topicId === topicId);
    }

    create(messageCreationRequest: MessageCreationRequest): Message {
        if (!this.topicsService.exists(messageCreationRequest.topicId)) {
            throw new Error('Topic does not exist');
        }
        if (!messageCreationRequest.message.startsWith('Bonjour,')) {
            throw new Error('Message is invalid');
        }

        const message = {
            id: '',
            ...messageCreationRequest,
            createdAt: new Date(),
        };
        this.messages.push(message);
        return message;
    }
}
