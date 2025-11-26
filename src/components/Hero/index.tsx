import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Titulo = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Hero = () => (
  <HeroSection>
    <Container>
      <Titulo>Encontre a vaga dos seus sonhos</Titulo>
      <Subtitulo>
        Somos o site com mais vagas de tecnologia no mercado, direcionadas para o Brasil.
      </Subtitulo>
    </Container>
  </HeroSection>
);

export default Hero;