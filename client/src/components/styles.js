import styled from "styled-components";

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
export const AsciiWrapper = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
`;
export const Ascii = styled.pre`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 7px;
    animation: ascii2 1.5s linear infinite;
    font-weight: 900;
    font-family: 'Azeret Mono', monospace;
    font-weight: bolder;

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
    font-family: Arial, Helvetica, sans-serif
`;

export const HightLight = styled.strong`
    color: #ff3366;
    line-height: 0.70em;
    text-shadow: 0px 0px 10px #ff3366,
            0px 0px 20px #ff3366;
            padding-left: 6px;

`