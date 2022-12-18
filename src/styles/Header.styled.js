import styled from 'styled-components'

export const Global = styled.div`
height: 70px;
width: 100vw;
background-color: #454646;
display: flex;
justify-content: space-between;

    ul {
        list-style: none;
        display: flex;
        margin-right: 25px;
        
        li {
            margin-left: 20px;
            margin-top: 10px;
        }
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    input {
        margin-top: 10px;
    }

    .cc {
        display: flex;
    }
`