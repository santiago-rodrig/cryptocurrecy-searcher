import React from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

const Container = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  span {
    font-weight: bold;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 30px;
`;

const Result = ({ result }) => {
  if (result === null) return null;
  if (result === false) return <Spinner />;
  return (
    <Container>
      <Price>
        Precio: <span>{result.PRICE}</span>
      </Price>
      <Paragraph>
        Precio más alto del día: <span>{result.HIGHDAY}</span>
      </Paragraph>
      <Paragraph>
        Precio más bajo del día: <span>{result.LOWDAY}</span>
      </Paragraph>
      <Paragraph>
        Variación en las últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
      </Paragraph>
      <Paragraph>
        Última actualización: <span>{result.LASTUPDATE}</span>
      </Paragraph>
    </Container>
  );
};

export default Result;
