import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSingleCountry } from '../redux/counterSlice';

const CountriesContext = createContext();
export const CountriesProvider = ({ children }) => {
  const dispatch = useDispatch();
  const handleCountryClick = name => {
    const encodedName = encodeURIComponent(name);
    dispatch(fetchSingleCountry(encodedName));
  };

  return (
    <CountriesContext.Provider
      value={{
        handleCountryClick,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export const useCountriesContext = () => useContext(CountriesContext);
