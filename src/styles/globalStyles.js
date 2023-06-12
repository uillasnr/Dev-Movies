import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;

}

body{
    background: #000000;
}
@media screen and (max-width: 445px) {
    /* Estilos para telas com largura máxima de 768px (versão mobile) */
    body {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

body::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
}

`
