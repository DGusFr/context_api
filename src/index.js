import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

//O método ReactDOM.render() é uma função do React que renderiza o conteúdo em um elemento HTML da página
//React.StrictMode (destacar problemas potenciais no código). possui os componentes:
//StylesProvider fornece estilos globais para um aplicativo React
//ThemeProvider fornecer temas globais para um aplicativo React
//Routes é um componente que deve conter as rotas do aplicativo
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
