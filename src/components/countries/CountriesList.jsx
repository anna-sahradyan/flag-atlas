import React from 'react';
import { useCountriesContext } from '../../context/CountainerProvider';
import { Link } from 'react-router-dom';
import {
  Capital,
  Card,
  CountryName,
  Img,
  ImgBlock,
  ItemInner,
} from './countriesStyled';

const CountriesList = ({ country }) => {
  const { handleCountryClick } = useCountriesContext();
  return (
    <Card onClick={() => handleCountryClick(country.name)}>
      <CountryName>{country.name}</CountryName>
      <ItemInner>
        <Link to={`/country/${country.name}`} data-key={country.name}>
          <ImgBlock>
            <Img src={country.flags['svg']} alt={country.name} />
          </ImgBlock>
        </Link>
      </ItemInner>
      <Capital>{country.capital}</Capital>
    </Card>
  );
};

export default CountriesList;
