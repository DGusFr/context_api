import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from 'components/Produto';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import NavBar from './NavBar';

//Dentro do componente "Feira", o nome e o saldo do usuário são obtidos a partir do contexto "UsuarioContext" usando o hook "useContext"
//"NavBar" é renderizado acima do cabeçalho e fornece navegação adicional 
function Feira() {
  const { nome, saldo = 0 } = useContext(UsuarioContext);
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {nome}!</h2>
          <h3> Saldo: R${saldo.toFixed(2)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )//O componente "Lista" é renderizado abaixo do cabeçalho e exibe uma lista de produtos. 
  //Ele mapeia o array "feira" usando o método ".map()" e renderiza o componente "Produto" para cada produto no array
  //Cada produto é passado como uma propriedade para o componente "Produto" usando o spread operator ("{...produto}"), e a chave "key" é definida como o ID do produto.
}

export default Feira;