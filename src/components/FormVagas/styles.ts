import styled from 'styled-components'

interface FormContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

export const FormContainer = styled.form<FormContainerProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

interface CampoInputProps {
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  value?: string
}

export const CampoInput = styled.input<CampoInputProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

interface BotaoPesquisarProps {
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
}

export const BotaoPesquisar = styled.button<BotaoPesquisarProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
