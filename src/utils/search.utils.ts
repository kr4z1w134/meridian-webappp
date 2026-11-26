// Search utilities - Safe Elasticsearch query encoding
export class SearchUtils {
  /**
   * Safely encode search terms for Elasticsearch queries
   * Handles special characters that could break query parsing
   */
  static encodeSearchTerm(term: string): string {
    if (!term) return '';
    return encodeURIComponent(term.trim());
  }

  /**
   * Build Elasticsearch query string with proper encoding
   */
  static buildQueryString(terms: string[]): string {
    return terms
      .map(term => this.encodeSearchTerm(term))
      .filter(term => term.length > 0)
      .join(' AND ');
  }
}