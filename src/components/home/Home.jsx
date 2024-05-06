import React, { useEffect, useState } from 'react';
import { BtnPart, Container, CountriesGridBox } from './homeStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllCountries,
  selectAllCountries,
  selectStatus,
} from '../../redux/counterSlice';
import CountriesList from '../countries/CountriesList';
import { Button, Stack } from '@mui/material';
import Loader from '../Loading/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const [visible, setVisible] = useState(12);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  const showMoreItem = () => {
    setVisible(prevState => prevState + 6);
  };

  const renderCountries = () => {
    if (!countries || countries.length === 0) {
      return null;
    }
    return countries
      .slice(0, visible)
      .map((country, index) => <CountriesList key={index} country={country} />);
  };

  return (
    <Container>
      <CountriesGridBox>
        {!status ? <Loader /> : renderCountries()}
      </CountriesGridBox>
      <BtnPart>
        <Stack direction='row' onClick={showMoreItem}>
          <Button
            variant='outlined'
            sx={{
              backgroundColor: '#100E2B',
              color: 'white',
              width: '500px',
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '50px',
              '&:hover': {
                color: '#100E2B',
              },
            }}
          >
            Load More
          </Button>
        </Stack>
      </BtnPart>
    </Container>
  );
};

export default Home;
