import React from 'react';
import styled from 'styled-components';

// Define as props manualmente
interface VagaItemProps {
  children?: React.ReactNode;
}

interface TituloProps {
  children?: React.ReactNode;
}

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
}

interface VagaProps {
  titulo: string;
}

const VagaItem = styled.li<VagaItemProps>`
  border: 1px solid #e1e8ed;
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Titulo = styled.h3<TituloProps>`
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.25rem;
`;

const Link = styled.a<LinkProps>`
  display: inline-block;
  background-color: #667eea;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a6fd8;
  }
`;

const Vaga: React.FC<VagaProps> = ({ titulo }) => (
  <VagaItem>
    <Titulo>{titulo}</Titulo>
    <Link href="#">
      Ver detalhes e candidatar-se
    </Link>
  </VagaItem>
);

export default Vaga;