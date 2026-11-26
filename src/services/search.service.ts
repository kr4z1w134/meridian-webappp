// Search service - Fixed URL encoding for special characters
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SearchService {
  constructor(private httpService: HttpService) {}

  async search(query: string): Promise<any> {
    // FIX: Properly encode search query for Elasticsearch
    // Special characters like &, +, # need to be URL-encoded
    const encodedQuery = encodeURIComponent(query.trim());
    
    const response = await this.httpService.axiosRef.get(`/api/v2/search?q=${encodedQuery}`);
    return response.data;
  }
}