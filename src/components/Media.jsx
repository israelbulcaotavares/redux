import React from "react";
import Card from "./Card";

export default (props) => {
   /*  const min = props.min 
    const max = props.max  */

    const { min, max } = props
  

  return (
    <Card title="Média dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{ 10 }</strong>
        </span>
      </div>
    </Card>
  );
};
