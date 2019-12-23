import { Test, TestingModule } from '@nestjs/testing';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

describe('Topics controller', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test
            .createTestingModule({ controllers: [TopicsController], providers: [TopicsService] })
            .compile();
    });

    it('should return the list of available topics', () => {
        const controller = module.get(TopicsController);
        const service = module.get(TopicsService);
        const topics = [
            { id: 'ERERER', title: 'Legal', slug: 'legal' },
            { id: 'SDFDFSDF', title: 'Economy', slug: 'economy' }
        ];
        spyOn(service, 'findAll').and.returnValue(topics);

        expect(controller.findAll()).toEqual(topics);
        expect(service.findAll).toHaveBeenCalledTimes(1);
    });
});
