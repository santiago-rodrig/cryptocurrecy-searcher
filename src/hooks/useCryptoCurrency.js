import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;
`;

const useCryptoCurrency = (labelText, initialState, currencies) => {
  const [state, setState] = useState(initialState);

  const CryptoCurrencySelect = () => (
    <>
      <Label>{labelText}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="" disabled>
          -- Elige una criptomoneda --
        </option>
        {currencies.map((c) => (
          <option key={c.CoinInfo.Name} value={c.CoinInfo.Name}>
            {c.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, CryptoCurrencySelect];
};

export default useCryptoCurrency;
