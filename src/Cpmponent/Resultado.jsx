import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  padding-bottom: 2rem;
`;
const Texto = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  background-color: #00365e;
  padding: 5px;

  border-radius: 10px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  background-color: #00365e;
  padding: 5px;
  border-radius: 10px;
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;
const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;

  return (
    <Contenedor>
      <div>
        <Imagen
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="imagen cripto"
        />
      </div>

      <div>
        <Precio>
          Precio actual:<span> {PRICE}</span>{" "}
        </Precio>
        <Texto>
          Precio mas alto del dia:<span> {HIGHDAY}</span>{" "}
        </Texto>
        <Texto>
          Precio mas bajo del dia:<span> {LOWDAY}</span>{" "}
        </Texto>
        <Texto>
          Variación ultimas 24 horas:<span> {CHANGEPCT24HOUR}</span>{" "}
        </Texto>
        <Texto>
          Ultima actualización:<span> {LASTUPDATE}</span>{" "}
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
