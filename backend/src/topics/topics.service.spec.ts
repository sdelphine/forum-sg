import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('Topics service', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test
            .createTestingModule({ controllers: [TopicsController], providers: [TopicsService] })
            .compile();
    });

    it('should return true if a topic exists when searching by its id', () => {
        const service = module.get(TopicsService);
        expect(service.exists('ERERER')).toBeTruthy();
    });

    it('should return false if a topic does not exists by searching by id', () => {
        const service = module.get(TopicsService);
        expect(service.exists('EREER')).toBeFalsy();
    });
});
