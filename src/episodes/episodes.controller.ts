import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
        console.log(sort);
        return 'all episodes';
    }

    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id);
        return 'one episode';
    }

    @Post()
    create(@Body() input: any) {
        console.log(input);
        return 'new episode';
    }
}
