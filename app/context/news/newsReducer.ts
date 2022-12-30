import type { Article } from '~/types/NewsResponse';
import type { NewsState } from './';

type NewsAction =
  | {
      type: 'CHANGE_CATEGORY';
      payload: string;
    }
  | {
      type: 'SET_NEWS';
      payload: Article[];
    }
  | {
      type: 'SET_TOTAL_NEWS';
      payload: number;
    }
  | {
      type: 'CHANGE_PAGE';
      payload: number;
    }
  | {
      type: 'SET_CURRENT_PAGE';
      payload: number;
    };

export const newsReducer = (state: NewsState, action: NewsAction) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload,
      };
    case 'SET_TOTAL_NEWS':
      return {
        ...state,
        totalNews: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
