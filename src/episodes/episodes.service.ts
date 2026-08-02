import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { Episode } from './entity/episode.entity'; // bzw. './interfaces/episode.interface'

@Injectable()
export class EpisodesService {
    private episodes: Episode[] = [];

    async findAll(sort: 'asc' | 'desc' = 'asc') {
        const sortAsc = (a: Episode, b: Episode) => { return a.name > b.name ? 1 : -1; };
        const sortDesc = (a: Episode, b: Episode) => { return a.name < b.name ? 1 : -1; };

        return sort === 'asc' ? this.episodes.sort(sortAsc) : this.episodes.sort(sortDesc);
    }

    async findFeatured() {
        return this.episodes.filter(episode => episode.featured);
    }

    async findOne(id: string) {
        return this.episodes.find(episode => episode.id === id);
    }

    async create(createEpisodeDto: CreateEpisodeDto) {
        const newEpisode = { ...createEpisodeDto, id: randomUUID()};
        this.episodes.push(newEpisode);
        return newEpisode;
    }

    async update(id: string, updateEpisodeDto: CreateEpisodeDto) {
        const episode = await this.findOne(id);
        if (!episode) {
            throw new Error('Episode not found');
        }
        Object.assign(episode, updateEpisodeDto);
        return episode;
    }

    async delete(id: string) {
        const episode = await this.findOne(id);
        if (!episode) {
            throw new Error('Episode not found');
        }
        this.episodes = this.episodes.filter(ep => ep.id !== id);
        return episode;
    }
}
