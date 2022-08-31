import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo } from "../store/actions/numeros";

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
          <input type="number" value={max} readOnly />
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
  };
}

/* fazer na ordem */
export default connect( mapStateToProp, mapDispatchToProp)(Intervalo);
