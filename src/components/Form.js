import React from "react";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";

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
  const [currency, CurrencySelect, setCurrency] = useCurrency();

  return (
    <form>
      <CurrencySelect />
      <SubmitButton type="submit" value="Buscar" />
    </form>
  );
};

export default Form;