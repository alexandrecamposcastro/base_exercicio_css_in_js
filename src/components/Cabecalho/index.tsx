import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #f9f9f9;
  padding: 20px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Titulo = styled.h1`
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const Cabecalho = () => (
  <Header>
    <Container>
      <Titulo>Vagas</Titulo>
    </Container>
  </Header>
);

export default Cabecalho;