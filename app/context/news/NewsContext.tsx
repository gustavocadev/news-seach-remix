import { createContext } from 'react';
import type { SelectChangeEvent } from '@mui/material';
import type { Article } from '~/types/NewsResponse';

type ContextProps = {
  category: string;
  news: Article[];
  currentPage: number;
  totalNews: number;

  // actions
  handleChangeCategory: (event: SelectChangeEvent<string>) => void;
  setNews: (news: Article[]) => void;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalNews: (totalNews: number) => void;
};

export const NewsContext = createContext({} as ContextProps);
