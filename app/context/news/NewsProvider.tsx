import { useEffect, useReducer } from 'react';
import type { ReactNode } from 'react';
import { NewsContext, newsReducer } from './';
import type { SelectChangeEvent } from '@mui/material';
import type { Article, NewsResponse } from '~/types/NewsResponse';

export type NewsState = {
  category: string;
  news: Article[];
  currentPage: number;
  totalNews: number;
};

const NEWS_INITIAL_STATE: NewsState = {
  category: 'general',
  news: [],
  currentPage: 1,
  totalNews: 0,
};

type Props = {
  children: ReactNode;
};

export const NewsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(newsReducer, NEWS_INITIAL_STATE);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${state.category}&apiKey=${ENV.API_KEY}`;
      const response = await fetch(url);
      const news = (await response.json()) as NewsResponse;

      setNews(news.articles);
      setTotalNews(news.totalResults);
      setCurrentPage(1);
    };
    fetchNews();
  }, [state.category]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${state.category}&page=${state.currentPage}&apiKey=${ENV.API_KEY}`;
      const response = await fetch(url);
      const news = (await response.json()) as NewsResponse;

      setNews(news.articles);
      setTotalNews(news.totalResults);
    };
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentPage]);

  // actions
  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    dispatch({ type: 'CHANGE_CATEGORY', payload: event.target.value });
  };

  const setNews = (news: Article[]) => {
    dispatch({ type: 'SET_NEWS', payload: news });
  };

  const setTotalNews = (totalNews: number) => {
    dispatch({ type: 'SET_TOTAL_NEWS', payload: totalNews });
  };

  const setCurrentPage = (currentPage: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch({ type: 'CHANGE_PAGE', payload: value });
  };

  return (
    <NewsContext.Provider
      value={{
        ...state,
        // actions
        handleChangeCategory,
        setNews,
        handleChangePage,
        setCurrentPage,
        setTotalNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
