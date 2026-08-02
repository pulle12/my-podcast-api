import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll() {
        return 'all episodes';
    }

    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Post()
    create() {
        return 'new episode';
    }
}
