import { TestingModule, Test } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TopicsService } from '../topics/topics.service';

describe('Message controller', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test
            .createTestingModule({
                controllers: [MessagesController],
                providers: [MessagesService, TopicsService],
            })
            .compile();
    });

    it('should return the list of messages by topic id', () => {
        const controller = module.get(MessagesController);
        const service = module.get(MessagesService);
        const messages = [
            { id: 'SCQDSQ', message: 'ZVCER', topicId: 'ERERER', creator: 'User2' },
        ];

        spyOn(service, 'findAllByTopic').and.returnValue(messages);
        expect(controller.findAllByTopic('ERERER')).toEqual(messages);
    });

    it('should allow creating a message', () => {
        const controller = module.get(MessagesController);
        const service = module.get(MessagesService);

        spyOn(service, 'create');

        const messageCreationRequest = { topicId: 'ERERER', message: 'Coucou', creator: 'User15' };
        controller.create(messageCreationRequest);

        expect(service.create).toHaveBeenCalledWith(messageCreationRequest);
    });
});
