import React, { Fragment, useState } from "react";

const useCurrency = () => {
  const [state, setState] = useState("");

  const CurrencySelect = () => (
    <>
      <label>Currency</label>
      <select>
        <option vlaue="MXN">Peso Mexicano</option>
      </select>
    </>
  );

  return [state, CurrencySelect, setState];
};

export default useCurrency;
