import { useState } from "react";
import styled from "styled-components";

// ['type of input', validationFunction]
const VALIDATIONS = new Map([
    ['custom', (value, props) => props.validation(value)],
    [undefined, () => true],
    ['number', (value) => !isNaN(Number(value))]
]);


/** 
 * Input extensivel com label, suporte para validação e mensagens de erro.
 * @component
 * @example
 * <InputField 
 *      label="Valor do Imovel" 
 *      type="number" 
 *      prefix="R$"
 *      errorMsg="Valor do imovel deve um numero"/>
 * @example
 *  <InputField 
 *      label="Idade" 
 *      type="custom" 
 *      validation={value => /[0-9]{1,3}/.test(value)} 
 *      errorMsg="Insira uma idade valida"/>
 * 
 */
function InputField(props) {

    const [isValid, setIsValid] = useState(true);

    const validate = (e) => {
        const content = e.target.value;

        const newIsValid = VALIDATIONS.get(props.type)(content, props);
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

export default InputField;

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
        width: 100%;
    }
`;

const ErrorLabel = styled.label`
    color: ${props => props.isValid ? 'transparent' : 'red'};;
    font-size: .85rem;
`;