import { useState } from "react";
import styled from "styled-components";

// validações para cada tipo escalaveis
const VALIDATIONS = new Map([
    [undefined, () => true],
    ['number', (value) => !isNaN(Number(value))]
]);

export default function InputField(props) {

    const [isValid, setIsValid] = useState(true);

    const validate = (e) => {
        const content = e.target.value;

        const newIsValid = VALIDATIONS.get(props.type)(content);
        setIsValid(newIsValid);

    };

    const inputId = props.label.replaceAll(' ', '-');

    return (


        <Field isValid={isValid}>
            <Label
                htmlFor={inputId}
                isValid={isValid}>{props.label}</Label>
            <InputArea isValid={isValid}>
                <Prefix>{props.prefix || ''}</Prefix>
                <input
                    type="text"
                    id={inputId}
                    onChange={validate}
                    defaultValue={props.value || ''}
                />
            </InputArea>
            <ErrorLabel
                htmlFor={inputId} isValid={isValid}>{props.errorMsg || ''}</ErrorLabel>
        </Field>
    );
}

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

const Prefix = styled.span`
    display: flex;
    align-items: end;
    font-size: 1rem;
`;

const InputArea = styled.div`
    display: flex;
    padding-bottom: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid ${props => props.isValid ? 'black' : 'red'};
    & > input {
        font-size: 1rem;
        background-color: transparent;
        border: none;
        outline: none;
        margin-left: 5px;
    }
`;

const ErrorLabel = styled.label`
    color: ${props => props.isValid ? 'transparent' : 'red'};;
    font-size: .85rem;
`;