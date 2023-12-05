import styled, { keyframes } from "styled-components";


export const terminalBody = styled.body`
    width: 100%;
    height: 100vh;
    background-color: #0d1321;
    overflow-x: hidden;

`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #0d1321;
    align-items: center;
    flex-direction:column;
    border: 5px solid white;
    border-top: 70px solid white;
    border-radius: 25px;
    overflow-x: hidden;
    overflow: hidden;
`;

export const Span = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
`;
export const AsciiWrapper = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
`;
//blink effect

const blink = keyframes`
    0%, 100%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
`;

 export const blinkingCursor = styled.span`
     font-size: 1.2em;
  color: #fff;
  animation: ${blink} 1s step-end infinite;
`


export const Ascii = styled.pre`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => prop.cor || "white"};
    text-align: center;
    font-size: 9px;
    animation: ascii2 1.5s linear infinite;
    font-weight: 900;
    font-family: 'Azeret Mono', monospace;
    font-weight: bolder;
    text-shadow: 10px 10px 10px purple;

    @keyframes ascii {
        0%{
            transform: rotate(2deg);
        }
        50%{
            transform: rotate(-2deg);
        }
        100%{
            transform: rotate(2deg);
        }
    }

    @keyframes ascii2 {
        0%{
            transform: translateY(-3px);
        }
        50%{
            transform: translateY(3px);
        }
        100%{
            transform: translateY(-3px);
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
`;
export const PImage = styled.img`
    width: 200px;
    height: 200px;
`;

export const TerminalInput = styled.input`
    width: 500px;
    height: 50px;
    color: white;
    background: none;
    border:none;
    outline: none;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
`;

 export const HightLight = styled.strong`
    color: ${(prop)=> prop.cor || "red"};
    line-height: 0.70em;
    text-shadow: 0px 0px 100px ${(prop) => prop.cor || "red"},
            0px 0px 200px ${(prop)=> prop.cor || "red"};
            padding-left: 6px;
`;



///parte do negocio ai

export const borderTerminal = styled.div`

`
export const navBarTerminal = styled.nav`
    position: absolute;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const buttonWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
`
export const buttonExit = styled.button`
    width: 40px;
    height: 40px;
    background-color: red;
    color: black;
    font-size: 32px;
    border: 2px solid black;
    margin-left: auto;
`
export const interiorNavBartTerminal = styled.div`
    height: 100%;
    width: 100%;
    gap: 10px;
    padding: 30px;
    display: flex;
    align-items: center;
`
export const interiorNavBartTerminalminText = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    float: left;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
    color: gray;
`


export const BannerWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
`
export const ProfileMainWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`


