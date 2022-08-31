import React from "react";
import Card from "./Card";
import { connect } from 'react-redux'


 function Media (props) {
  const {min, max} = props 
  console.log(props)
/*   console.log(props.min)
  console.log(props.max) */
  return (
    <Card title="Média dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{ (max + min) / 2 }</strong>
         
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max,
    primeiroNome: state.nomes[0]
  }
}

export default connect(mapStateToProps) (Media)