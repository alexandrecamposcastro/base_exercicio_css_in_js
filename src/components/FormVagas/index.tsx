import React, { useState } from 'react';
import styled from 'styled-components';

interface FormProps {
  onSubmit?: (event: React.FormEvent) => void;
  children?: React.ReactNode;
}

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps {
  type?: 'submit' | 'button';
  children?: React.ReactNode;
}

const FormContainer = styled.form<FormProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  background-color: #f9f9f9;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const Campo = styled.input<InputProps>`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const BotaoPesquisar = styled.button<ButtonProps>`
  background-color: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a6fd8;
  }
`;

const FormVagas = () => {
  const [termo, setTermo] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Pesquisando:', termo);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Campo
        type="text"
        placeholder="Front-end, Fullstack, Node, Design"
        value={termo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTermo(event.target.value)}
      />
      <BotaoPesquisar type="submit">
        Pesquisar
      </BotaoPesquisar>
    </FormContainer>
  );
};

export default FormVagas;