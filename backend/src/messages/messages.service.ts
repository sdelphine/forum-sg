import { Injectable } from '@nestjs/common';
import { Messages, MessageCreationRequest, Message } from './messages.models';
import { TopicsService } from '../topics/topics.service';

function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

@Injectable()
export class MessagesService {

    private messages = [
        {
            id: 'SCQDSQ',  topicId: 'ERERER',
            message: 'Bonjour, First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj. First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj. First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
            createdAt: new Date(), creator: 'User1',
        },
        {
            id: 'SDFVDV', topicId: 'ERERER',
            message: 'Bonjour, Second message First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
            createdAt: new Date(), creator: 'User2',
        },
        {
            id: 'SDGBDFG', topicId: 'ERERER',
            message: 'Bonjour, First message First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
            createdAt: new Date(), creator: 'User1',
        },
        {
            id: 'SDFVS', topicId: 'SDFDFSDF',
            message: 'Bonjour, Third message First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
            createdAt: new Date(), creator: 'User1',
        },
    ];

    constructor(private readonly topicsService: TopicsService) {}

    findAllBy(topicId: string, slug: string): Messages {
        if (topicId) {
            return this.messages.filter(message => message.topicId === topicId);
        }
        if (slug) {
            const topic = this.topicsService.findBySlug(slug);
            if (!topic) {
                throw new Error('topic not found');
            }

            return this.messages.filter(message => message.topicId === topic.id);
        }

        throw new Error('should supply at least one matching parameter');
    }

    create(messageCreationRequest: MessageCreationRequest): Message {
        const topicsList = this.topicsService.topics;
        const topicsIdList = topicsList.map(topic => topic.id);
        const homeTopicsId = topicsList.find(topic => topic.title === 'Home').id;
        if (!topicsIdList.includes(messageCreationRequest.topicId)) {
            throw new Error('Topic does not exist');
        }
        if (messageCreationRequest.topicId === homeTopicsId) {
            throw new Error('Operation not permit: add message to home topic')
        }
        if (!messageCreationRequest.message.startsWith('Bonjour')) {
            throw new Error('Message is invalid');
        }

        const message = {
            id: randomId(),
            ...messageCreationRequest,
            createdAt: new Date(),
        };
        this.messages.push(message);
        return message;
    }
}
