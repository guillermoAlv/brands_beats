import {createContext } from 'react';

const SearchContext = createContext({
  status: 'paused',
  togglePlayPause: (a:string) => {},
});

export default SearchContext;