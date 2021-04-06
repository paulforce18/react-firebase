import Styled from 'styled-components'
export const Div = Styled.div`
    position: relative;
    word-wrap: break-word;
    font-size: 21px;
    padding: 5px;
    width: 250px;
    min-height: 150px;
    margin: auto;
    background: #FFFFFF;
    border: 1px solid ${props => props.color?props.color:"#77D6FF"};
    margin-bottom: 10px;
    transition: 0.5s;

    :hover{
        box-shadow: 0 0 20px ${props => props.color?props.color:"#77D6FF"};
        background-color: ${props => props.color?props.color:"#77D6FF"};
        color: #FFF
    }

    > h6{
        border-bottom: 1px solid ${props => props.color?props.color:"#77D6FF"};
    }
    :hover h6{
        border-bottom: 1px solid #FFF;
    }

    > *{
        margin: 10px;
        letter-spacing: 2px;
    }
    @media (min-width: 500px){
            width: 40%;
            min-width: 376px;
    }
`