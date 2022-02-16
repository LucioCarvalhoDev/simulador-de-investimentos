import { useState } from "react";
import styled from "styled-components";

const VALIDATIONS = new Map([
    [undefined, (value) => true],
    ['number', (value) => !isNaN(Number(value))]
]);

export default function InputField(props) {
    const [isValid, setIsValid] = useState(true);

    const validate = (e) => {
        const content = e.target.value;

        const newIsValid = VALIDATIONS.get(props.type)(content);
        setIsValid(newIsValid);

    };

    return (

        <Field isValid={isValid}>
            <Label isValid={isValid}>{props.label}</Label>
            <InputArea isValid={isValid}>
                <span>{props.prefix || ''}</span><input onChange={validate} type="text" defaultValue={props.value || ''} />
            </InputArea>
            <ErrorLabel isValid={isValid}>{props.errorMsg || ''}</ErrorLabel>
        </Field>
    );
}

const Container = styled.div`
display: flex;
    width: 100%;
    height: 100%;
`;

const Field = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Label = styled.label`
    color: ${props => props.isValid ? 'black' : 'red'};
    font-size: .85rem;
    display: block;
    margin-bottom: .8rem;
    `;

const InputArea = styled.div`
    display: grid;
    grid-template-areas:
        "a b"
    ;
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid ${props => props.isValid ? 'black' : 'red'};
    & > input {
        background-color: transparent;
        font-size: 1rem;
        border: none;
        outline: none;
        margin-left: 5px;
    }
`;

const ErrorLabel = styled.label`
    color: ${props => props.isValid ? 'transparent' : 'red'};;
    font-size: .85rem;
`;