import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import PropTypes from "prop-types";
import useCurrency from "../hooks/useCurrency";
import useCryptoCurrency from "../hooks/useCryptoCurrency";
import Error from "./Error";

const CURRENCIES = [
  { code: "USD", name: "Dólar de Estados Unidos" },
  { code: "MXN", name: "Peso Mexicano" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Libra Esterlina" },
];

const SubmitButton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setQuery }) => {
  const [error, setError] = useState(false);
  const [currency, CurrencySelect] = useCurrency("Moneda", "", CURRENCIES);
  const [cryptoCurrencies, setcryptoCurrencies] = useState([]);
  const [cryptoCurrency, CryptoCurrencySelect] = useCryptoCurrency(
    "Criptomoneda",
    "",
    cryptoCurrencies
  );

  const searchCryptoCurrency = (e) => {
    e.preventDefault();

    if (currency.trim() === "" || cryptoCurrency.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setQuery({ currency, cryptoCurrency });
  };

  useEffect(() => {
    const queryAPI = async () => {
      const API_KEY =
        "a028a3d92c022ebfb7179fb6e655b4a479b230f85e384021633b12eb5aa3f139";
      const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${API_KEY}`;
      const result = await axios.get(URL);
      setcryptoCurrencies(result.data.Data);
    };

    queryAPI();
  }, [setcryptoCurrencies]);

  return (
    <form onSubmit={searchCryptoCurrency}>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
      <CurrencySelect />
      <CryptoCurrencySelect />
      <SubmitButton type="submit" value="Buscar" />
    </form>
  );
};

Form.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Form;
