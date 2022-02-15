import styled from "styled-components";

export default function InputField(props) {

    return (
        <Container>
            <Label>{props.label}</Label>
            <InputArea>
                <span>{props.sufix || ''}</span><input type="text" />
            </InputArea>
            <ErrorField></ErrorField>
        </Container>
    );
}

const Container = styled.div`
    padding: 2rem 0px .5rem 0rem;
    border-bottom: 1px solid black;
`;

const Label = styled.label`
    font-size: .85rem;
    display: block;
    margin-bottom: 1rem;
`;

const InputArea = styled.div`
    & > input {
        background-color: transparent;
        font-size: 1rem;
        border: none;
        outline: none;
        margin-left: 5px;
    }
`;

const ErrorField = styled.div`

`;