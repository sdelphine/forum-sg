import { Controller, Get } from '@nestjs/common';
import { Topics } from './topics.model';
import { TopicsService } from './topics.service';

@Controller({
    path: '/topics',
})
export class TopicsController {

    constructor(private readonly topicsService: TopicsService) {}

    @Get()
    findAll(): Topics {
        return this.topicsService.findAll();
    }
}
