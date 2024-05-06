import React from 'react';
import { useSelector } from 'react-redux';
import { selectSingleCountry, selectStatus } from '../../redux/counterSlice';
import CountriesDetail from './CountriesDetail';
import Loader from '../Loading/Loader';
import { Container } from '../home/homeStyled';
import { LoaderBox } from './countriesStyled';

const CountriesDetailList = () => {
  const country = useSelector(selectSingleCountry);
  const status = useSelector(selectStatus);

  const renderCountries = () => {
    if (!country || (Array.isArray(country) && country.length === 0)) {
      return null;
    } else {
      return (
        <LoaderBox>
          {status !== true ? (
            <Loader />
          ) : (
            Array.isArray(country) &&
            country.map((item, index) => (
              <CountriesDetail key={index} country={item} />
            ))
          )}
        </LoaderBox>
      );
    }
  };

  return <Container>{renderCountries()}</Container>;
};

export default CountriesDetailList;
