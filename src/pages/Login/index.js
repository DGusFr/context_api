import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';

//Função de criação do formulário de login
function Login() {
  //useContext do React para acessar informações do contexto fornecido pelo componente pai UsuarioContext
  const history = useHistory();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        value={saldo}
        type="number"
        onChange={event => setSaldo(Number(event.target.value))}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 4}
        onClick={() => history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  )
  //Quando o botão "Avançar" é clicado a página é redirecionada para a rota "/feira" usando o hook useHistory do React Router.
};

export default Login;