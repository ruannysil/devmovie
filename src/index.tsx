import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import RoutesApp from './routes';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  color: {
    bg: '#000',
    color1: "#fff",
    color2: "#ff0000",
  }
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        height: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.995))`,
        color: '#fff'
      }
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const applyCustomScrollbarStyles = () => {
  const css = `
    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
      width: 5px; /* Largura da barra de rolagem */
      background-color: transparent; /* Fundo transparente */
    }

    /* Estilizando o track (trilho) da barra de rolagem */
    ::-webkit-scrollbar-track {
      background-color: #000; /* Cor do track (trilho) */
    }

    /* Estilizando o thumb (cabo) da barra de rolagem */
    ::-webkit-scrollbar-thumb {
      background-color: #ffff; /* Cor do thumb (cabo) */
      border-radius: 5px; /* Arredondamento do thumb (cabo) */
    }

    /* Estilizando o thumb (cabo) da barra de rolagem quando hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #ff0f0f; /* Cor do thumb (cabo) quando hover */
    }
  `;

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
};

const App = () => {
  useEffect(() => {
    applyCustomScrollbarStyles();
  }, []);

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <RoutesApp />
      </ChakraProvider>
    </React.StrictMode>
  );
};

root.render(<App />);
