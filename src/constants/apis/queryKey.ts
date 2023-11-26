import { ProjectReqParams } from '../types';

const QUERY_KEY = {
  USER: {
    base: ['users'],
  },
  PROJECT: {
    base: ['projects'],
    main: (searchType: ProjectReqParams['main']) => [
      ...QUERY_KEY.PROJECT.base,
      'main',
      searchType,
    ],
    detail: (id: number) => [...QUERY_KEY.PROJECT.base, 'detail', id],
  },
  OPINION: {
    base: ['opinions'],
    list: () => [...QUERY_KEY.OPINION.base, 'list'],
    detail: (suggestionId: number) => [
      ...QUERY_KEY.OPINION.base,
      'detail',
      suggestionId,
    ],
  },
  CULTURE_EVENTS: {
    base: ['cultureEvents'],
  },
};

export default QUERY_KEY;
