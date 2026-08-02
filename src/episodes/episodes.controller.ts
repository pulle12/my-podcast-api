import { Controller, Get, Post, Query, Body, Param, Put, Delete } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private episodesService: EpisodesService,
        private configService: ConfigService
    ) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
        console.log(sort);
        return this.episodesService.findAll(sort);
    }

    @Get('featured')
    findFeatured(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
        console.log(sort);
        return this.episodesService.findFeatured();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.episodesService.findOne(id);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        console.log(input);
        return this.episodesService.create(input);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() input: UpdateEpisodeDto) {
        console.log(id, input);
        return this.episodesService.update(id, input);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        console.log(id);
        return this.episodesService.delete(id);
    }
}
