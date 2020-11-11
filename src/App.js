import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import cryptoImage from "./criptomonedas.png";
import Form from "./components/Form";
import Result from "./components/Result";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [query, setQuery] = useState(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (query === null) return;
    const queryAPI = async () => {
      const API_KEY =
        "a028a3d92c022ebfb7179fb6e655b4a479b230f85e384021633b12eb5aa3f139";
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${query.cryptoCurrency}&tsyms=${query.currency}&api_key=${API_KEY}`;
      const result = await axios.get(URL);
      setResult(result.data.DISPLAY[query.cryptoCurrency][query.currency]);
    };

    queryAPI();
  }, [query, setResult]);
  return (
    <Container>
      <div>
        <Image src={cryptoImage} alt="Imagen criptomoneda" />
      </div>
      <div>
        <Heading>Busca precios de criptomonedas al instante</Heading>
        <Form setQuery={setQuery} />
        <Result result={result} />
      </div>
    </Container>
  );
}

export default App;
