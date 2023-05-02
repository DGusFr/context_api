import { createContext, useState } from 'react';

//Este codigo cria o contexto de usuario 
export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário"

//O objetivo desta função é criar um contexto "UsuarioContext" que contém as informações do usuário, como o nome e o saldo.
//"useState" é usada para criar dois estados dentro do componente, "nome" inicializado com uma string vazia e o estado "saldo" inicializado com o valor 0. Esses estados são atualizados por meio das funções "setNome" e "setSaldo"
export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState(0);
  //retorna o contexto criado pelo "UsuarioContext.Provider", com os valores de "nome" e "saldo" atualizados pelos estados criados anteriormente, envolvendo o "children", que representa os componentes que estão dentro do escopo do contexto criado
  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        saldo,
        setSaldo
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}
//Esse código permite compartilhar dados entre componentes sem precisar passar props manualmente entre eles, tornando o código modular e reutilizável.