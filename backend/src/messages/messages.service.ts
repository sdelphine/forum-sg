import { Injectable } from '@nestjs/common';
import { Messages, MessageCreationRequest, Message } from './messages.models';
import { TopicsService } from '../topics/topics.service';

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

    findAllByTopic(topicId: string): Messages {
        return this.messages.filter(message => message.topicId === topicId);
    }

    create(messageCreationRequest: MessageCreationRequest): Message {
        // Add condition if topicId is Home id
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
