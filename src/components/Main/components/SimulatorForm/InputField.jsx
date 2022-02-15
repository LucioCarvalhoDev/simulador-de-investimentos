import styled from "styled-components";

export default function InputField(props) {

    return (
        <Container>
            <Label>{props.label}</Label>
            <InputArea>
                <span>{props.sufix || ''}</span><input type="text" defaultValue={props.value || ''} />
            </InputArea>
            <ErrorField></ErrorField>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-bottom: 1px solid black;
`;

const Label = styled.label`
    font-size: .85rem;
    display: block;
    margin-bottom: .8rem;
`;

const InputArea = styled.div`
    & > input {
        background-color: transparent;
        font-size: 1rem;
        border: none;
        outline: none;
        margin-left: 5px;
    }
    display: flex;
    margin-bottom: 5px;
`;

const ErrorField = styled.div`

`;