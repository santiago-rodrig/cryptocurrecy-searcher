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

const useCurrency = (labelText, initialState, currencies) => {
  const [state, setState] = useState(initialState);

  const CurrencySelect = () => (
    <>
      <Label>{labelText}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="" disabled>
          -- Elige una moneda --
        </option>
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, CurrencySelect];
};

export default useCurrency;
