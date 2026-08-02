import { Controller, Get, Post, Query, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
        console.log(sort);
        return 'all episodes';
    }

    @Get('featured')
    findFeatured(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
        console.log(sort);
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return 'one episode';
    }

    @Post()
    create(@Body() input: any) {
        console.log(input);
        return 'new episode';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() input: any) {
        console.log(id, input);
        return 'updated episode with id ' + id;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        console.log(id);
        return 'deleted episode with id ' + id;
    }
}
