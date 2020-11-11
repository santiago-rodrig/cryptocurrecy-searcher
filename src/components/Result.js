import React from "react";

const Result = ({ result }) => {
  if (result === null) return null;
  console.log(result);
  return (
    <div>
      <p>
        Precio: <span>{result.PRICE}</span>
      </p>
      <p>
        Precio más alto del día: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Precio más bajo del día: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Variación en las últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Última actualización: <span>{result.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Result;
