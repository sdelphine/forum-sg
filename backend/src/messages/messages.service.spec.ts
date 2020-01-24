import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { TopicsService } from '../topics/topics.service';

describe('Messages service', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test
            .createTestingModule({
                controllers: [MessagesController],
                providers: [MessagesService, TopicsService],
            })
            .compile();
    });

    it('should return the list of message by topic id', () => {
        const service = module.get(MessagesService);
        expect(service.findAllBy('SDFDFSDF', null))
            .toEqual([{
                id: 'SDFVS', topicId: 'SDFDFSDF',
                message: 'Bonjour, Third message First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
                createdAt: expect.anything(), creator: 'User1',
            }]);

    });

    it('should return the list of message by topic slug', () => {
        const service = module.get(MessagesService);

        expect(service.findAllBy(null, 'economy'))
            .toEqual([{
                id: 'SDFVS', topicId: 'SDFDFSDF',
                message: 'Bonjour, Third message First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.First message zaeqscd qsdh aqfdvlkh. Qqsdca sdflkjhmqserkjh zfevb zfv zregtzert zertgz. azer h arezf a arf azergz qrfezr zertg lkqjh  qaergzerjk qzjvhser:ghqez aermsjhmj.',
                createdAt: expect.anything(), creator: 'User1',
            }]);
    });

    describe('message creation', () => {
        it('should reject invalid messages', () => {
            const service = module.get(MessagesService);

            spyOn(module.get(TopicsService), 'exists').and.returnValue(true);

            expect(() => service.create(
                { topicId: 'whatever', message: 'Bonjour', creator: 'Test' },
                )).toThrowError('Message is invalid');
        });

        it('should reject when trying to add a message to an unknown topic', () => {
            const service = module.get(MessagesService);

            spyOn(module.get(TopicsService), 'exists').and.returnValue(false);

            expect(() => service.create(
                { topicId: 'whatever', message: 'Bonjour, ça va', creator: 'Test' },
                )).toThrowError('Topic does not exist');
        });

        it('should persist valid messages', () => {
            const service = module.get(MessagesService);

            const result = service.create(
                { topicId: 'ERERER', message: 'Bonjour, comment ça va bien', creator: 'Test' });

            expect(result).toEqual({
                id: expect.anything(),
                topicId: 'ERERER', message: 'Bonjour, comment ça va bien',
                createdAt: expect.anything(),
                creator: 'Test',
            });
        });
    });
});
