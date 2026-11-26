// Search controller - Fixed URL encoding
import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from '../services/search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  async search(@Query('q') query: string) {
    // Controller passes query to service - encoding now happens in service
    return this.searchService.search(query);
  }
}