import React from 'react';
import Vaga from '../../components/Vaga';
import styled from 'styled-components';

// Define as props manualmente
interface ListaContainerProps {
  children?: React.ReactNode;
}

interface TituloProps {
  children?: React.ReactNode;
}

interface ListaProps {
  children?: React.ReactNode;
}

const ListaContainer = styled.div<ListaContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Titulo = styled.h2<TituloProps>`
  color: #2c3e50;
  margin-bottom: 24px;
  font-size: 1.5rem;
`;

const Lista = styled.ul<ListaProps>`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const ListaVagas = () => {
  const vagas = [
    'Desenvolvedor Front-end',
    'Desenvolvedor Back-end', 
    'Desenvolvedor Fullstack',
    'Designer UX/UI',
    'Product Manager'
  ];

  return (
    <ListaContainer>
      <Titulo>Vagas Disponíveis</Titulo>
      <Lista>
        {vagas.map((vaga, index) => (
          <Vaga key={index} titulo={vaga} />
        ))}
      </Lista>
    </ListaContainer>
  );
};

export default ListaVagas;