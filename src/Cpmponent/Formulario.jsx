import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMoneda from "../Hooks/useSelectMoneda";
import { monedas } from "../Data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;
const Formulario = ({setCotizaMoneda}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMoneda("Elige tu moneda", monedas);

  const [criptoMoneda, SelectCriptoMoneda] = useSelectMoneda(
    "Elige tu Cripto moneda",
    criptos
  );
  //CONSUMIENDO UNA API
  useEffect(() => {
    //manejando errores
    try {
      const consultarApi = async () => {
        //direccion de consulta
        const url =
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=30&tsym=USD";
        //lanzando peticion
        const respuesta = await fetch(url);
        //formateando respuesta
        const resultados = await respuesta.json();
        //console.log(respuesta);
        const arrayCritops = resultados.Data.map((cripto) => {
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName,
          };

          return objeto;
          
        });
        setCriptos(arrayCritops);
      };
      consultarApi();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //validando formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    
    setCotizaMoneda({moneda,criptoMoneda})
    
  };
 
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />
      
        <InputSubmit type="submit" value={"Cotizar"} />
      </form>
    </>
  );
};

export default Formulario;
