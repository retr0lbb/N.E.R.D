import styled from "styled-components";

const bgcolor = "#0d1321";



export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #0d1321;
    align-items: center;
    flex-direction:column;
`;

export const Span = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
`;
export const Ascii = styled.pre`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    animation: ascii 1.5s linear infinite;


    @keyframes ascii {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`
export const PText = styled.p`
    width: 100%;
    height: 100%;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Azeret Mono', monospace;
`
export const PImage = styled.img`
    width: 200px;
    height: 200px;
`;

export const TerminalInput = styled.input`
    width: 100%;
    height: 50px;
    color: white;
    background: none;
    border:none;
    outline: none;
    font-size: 16px;
    font-weight: 900;
    padding: 0px 560px 0px 560px;
`;

export const HightLight = styled.strong`
    color: #ff3366;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(20, 20, 20, .3));
    line-height: 0.70em;
    animation: animate 3s linear infinite;
    padding-left: 6px;



    @keyframes animate {
        0%{
            color: #FF99B3;
            text-shadow: 0px 0px 10px #ff3366,
            0px 0px 20px #ff3366,
            0px 0px 40px #ff3366,
            0px 0px 80px #ff3366,
            0px 0px 120px #ff3366,
            0px 0px 200px #ff3366,
            0px 0px 300px #ff3366,
            0px 0px 400px #ff3366

        }
        100%{
            color: #FF99B3;
            filter: hue-rotate(360deg);
            text-shadow: 0px 0px 10px #ff3366,
            0px 0px 20px #ff3366,
            0px 0px 40px #ff3366,
            0px 0px 80px #ff3366,
            0px 0px 120px #ff3366,
            0px 0px 200px #ff3366,
        }
    }

`