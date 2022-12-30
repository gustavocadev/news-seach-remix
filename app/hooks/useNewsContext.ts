import { useContext } from 'react';
import { NewsContext } from '../context/news/NewsContext';

const useNewsContext = () => {
  return useContext(NewsContext);
};

export default useNewsContext;
