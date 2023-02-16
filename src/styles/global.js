import {createGlobalStyle} from 'styled-components'

export const StyleGlobal = createGlobalStyle`
    :root {
        --azul: #1B1D39;
        --verde: #64BC9E;
        --white: #E6E6E6;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

`