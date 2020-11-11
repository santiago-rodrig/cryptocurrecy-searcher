import React, { Fragment, useState } from "react";

const useCurrency = (labelText, initialState, currencies) => {
  const [state, setState] = useState(initialState);

  const CurrencySelect = () => (
    <>
      <label>{labelText}</label>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="" disabled>
          -- Elige una moneda --
        </option>
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </>
  );

  return [state, CurrencySelect];
};

export default useCurrency;
