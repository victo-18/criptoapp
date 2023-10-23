import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./Cpmponent/Formulario";
import Resultado from "./Cpmponent/Resultado";
import { useEffect, useState } from "react";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 34px;
  & ::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
function App() {
  const [cotizaMoneda, setCotizaMoneda] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  useEffect(() => {
    if (Object.keys(cotizaMoneda).length > 0) {
      const cotizarCripto = async () => {
        const { moneda, criptoMoneda } = cotizaMoneda;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCotizacion(resultado.DISPLAY[criptoMoneda][moneda]);
      };

      cotizarCripto();
    }
  }, [cotizaMoneda]);
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen criptomonedas" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
     
        <Formulario
          setCotizaMoneda={setCotizaMoneda}
        />
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion}/>}
      </div>
    </Contenedor>
  );
}

export default App;
