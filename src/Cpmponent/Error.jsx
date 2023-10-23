
import styled from "@emotion/styled";
const Error = ( {children}) => {
  const Error = styled.div`
    background-color: red;
    border-radius: 10px;
    text-align: center;
  `;
  const Parrafo = styled.p`
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
  `;
  return (
    <Error className="Error">
      <Parrafo>{children}</Parrafo>
    </Error>
  );
};

export default Error;
