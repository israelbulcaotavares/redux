import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;
   
  

  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={min} 
            onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={max} 
            onChange={e => props.alterarMaximo(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProp(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // action creator ->(retona) action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // action creator ->(retona) action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

/* fazer na ordem */
export default connect( mapStateToProp, mapDispatchToProp)(Intervalo);
