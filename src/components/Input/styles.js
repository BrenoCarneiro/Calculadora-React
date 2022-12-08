import styled from 'styled-components'
export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #ADADAD;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: digii;

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAAA;
        color: #000000;
        border: 0;
        font-size: 38px;
        font-weight: 600;
        font-family: digii;
        padding: 0 20px;
    }
    @media (max-width: 580px){
        height: 20%;
    }
    
`