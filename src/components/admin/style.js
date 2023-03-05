import style from 'styled-components'

export const StyleAdmin = style.div`
    height: auto;
    padding: 20px 70px;
    max-width: 500px;
    min-width: 300px;
    background: var(--verde);
    color: var(--azul);
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;

    img{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin-bottom: 10px
    }
    h1{
        margin-bottom: 10px;
    }
    p{
        text-align: justify;
    }

    @media(max-width: 400px){
        padding: 15px 50px;
        p{
            text-align: justify;
            font-size: 14px;
        }
    }
`