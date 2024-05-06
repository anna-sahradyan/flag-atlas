import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  min-height: 100dvh;
`;
export const BtnPart = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const CountriesGridBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
