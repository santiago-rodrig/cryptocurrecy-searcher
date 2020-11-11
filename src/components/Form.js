import React from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCryptoCurrency from "../hooks/useCryptoCurrency";

const CURRENCIES = [
  { code: "USD", name: "Dólar de Estados Unidos" },
  { code: "MXN", name: "Peso Mexicano" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Libra Esterlina" },
];

const CRYPTO_CURRENCIES = [{ code: "USD", name: "Bitcoin" }];

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

const Form = () => {
  const [currency, CurrencySelect] = useCurrency("Moneda", "", CURRENCIES);
  const [cryptoCurrency, CryptoCurrencySelect] = useCryptoCurrency(
    "Criptomoneda",
    "",
    CRYPTO_CURRENCIES
  );

  return (
    <form>
      <CurrencySelect />
      <CryptoCurrencySelect />
      <SubmitButton type="submit" value="Buscar" />
    </form>
  );
};

export default Form;
