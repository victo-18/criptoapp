import { useState } from "react";
import styled from "@emotion/styled";

const LabelMoneda = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const SelectOption = styled.select`
  background-color: #fff;
  color: #000;
  padding: 15px;
  width: 100%;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
  }
`;
//Custon hooks 
const useSelectMoneda = (label, opciones) => {
  const[state,setState]=useState('')
  const SelectMonedas = () => (
    <>
      <LabelMoneda>{label}</LabelMoneda>
      <SelectOption
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value={""}>Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </SelectOption>
    </>
  );
  return [state,SelectMonedas];
};

export default useSelectMoneda;
