import React from 'react';
import { Paper } from '@mui/material';
import {
  CapitalDetail,
  Div,
  FlagPart,
  Img,
  ImgBox,
  ItemsInner,
  NameDetail,
  Span,
} from './countriesStyled';

const CountriesDetail = ({ country }) => {
  const language = country.languages[0]?.name;
  return (
    <Paper
      elevation={3}
      sx={{
        width: 700,
        margin: '0 auto',
        marginTop: '20px',
        minHeight: '500px',
      }}
    >
      <ItemsInner>
        <NameDetail>{country.name}</NameDetail>
        <FlagPart>
          <ImgBox>
            <Img src={country.flags['svg']} alt={country.name}></Img>
          </ImgBox>
        </FlagPart>
        <CapitalDetail>{country.capital}</CapitalDetail>
        <Div>
          Currency:
          <Span>
            {' '}
            {country.currencies[0]?.name} {country.currencies[0]?.symbol}
          </Span>
        </Div>
        <Div>
          Language:<Span>{language}</Span>
        </Div>
        <Div>
          Population:<Span>{country.population}</Span>
        </Div>
      </ItemsInner>
    </Paper>
  );
};

export default CountriesDetail;
