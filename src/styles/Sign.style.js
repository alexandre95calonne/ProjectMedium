import styled from 'styled-components'

export const SignContainer = styled.div`
    height: calc(100vh - 70px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin-top: 50px;
    }

    input {
        height: 50px;
        width: 300px;
        margin-top: 35px;
    }

    button {
        width: 310px;
        height: 40px;
        margin-top: 25px;
    }
    
`