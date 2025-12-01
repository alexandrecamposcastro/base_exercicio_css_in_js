import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle, Container } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
