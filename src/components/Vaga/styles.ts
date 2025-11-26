import styled from 'styled-components';

export const VagaItem = styled.li`
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

export const Titulo = styled.h3`
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.25rem;
`;

export const Link = styled.a`
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