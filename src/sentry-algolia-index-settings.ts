import { Settings } from '@algolia/client-search';

/**
 * These are the recommended settings for use with Sentry Algoli indexes.
 * requires an opinionated record style which can be created using
 * ./helpers/parseRecordsFromHTML
 */
const settings: Settings = {
  snippetEllipsisText: '…',
  highlightPreTag: '<mark>',
  highlightPostTag: '</mark>',
  attributesToSnippet: [`text:15`],
  attributesToHighlight: ['section'],
  attributesForFaceting: [
    'filterOnly(pathSegments)',
    'filterOnly(platforms)',
    'filterOnly(legacy)',
  ],
  distinct: 3,
  attributeForDistinct: 'section',
  attributesToRetrieve: ['text', 'title', 'section', 'url', 'anchor'],
  searchableAttributes: ['unordered(section)', 'unordered(keywords)', 'text'],
  customRanking: ['asc(sectionRank)', 'desc(position)'],
  disableTypoToleranceOnWords: ['react', 'cli'],
  advancedSyntax: true,
};

export default settings;
