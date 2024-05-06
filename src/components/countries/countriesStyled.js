import styled from 'styled-components';
export const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #597cc0;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 10px;
  background: linear-gradient(to bottom right, #fff 0%, #f0f4f7 100%);
  a:hover {
    color: #597cc0;
  }

  &:hover {
    transform: scale(0.9);
    z-index: 2;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  }
`;
export const ItemInner = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
  width: 200px;
  height: 200px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Capital = styled.div`
  font-size: 20px;
  display: flex;
  font-weight: 700;
  justify-content: center;
`;
export const CountryName = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
export const ImgBlock = styled.div``;
export const LoaderBox = styled.div``;
/*Countries Details*/
export const ItemsInner = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 400px;
  color: #0064ad;
`;
export const FlagPart = styled.div``;

export const CapitalDetail = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin: 40px 0 40px 0;
`;
export const NameDetail = styled.p`
  margin-top: 20px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Div = styled.div`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Span = styled.span`
  display: inline-block;
  width: 40%;
`;
export const ImgBox = styled.div`
  width: 50%;
  margin: 0 auto;
`;
