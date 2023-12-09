import styled from "styled-components"
export default function InputForms({text, type, placeHolder}){
    return(
        <FormWrapper>
            <FormLabel>{text}</FormLabel>
            {type === "toggle" && <div>toglle</div>}
            {type === "text" && <InputText placeholder={placeHolder ?? "defalt"}/>}
            {type === "file" && <FileInput type="file" />}
        </FormWrapper>
    )
}

const FileInput = styled.input`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
`

const FormWrapper = styled.div`
    text-align: left;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    `;
const InputText = styled.input`
    text-align: left;
    width:60%;
    color: white;
    height: 60px;
    margin: 10px;
    display: flex;
    align-items: center;

`

const FormLabel = styled.label`
    text-align: left;
    height: 100%;
    font-size: 32px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
`