import styled from "styled-components";
import ButtonRatio from "./ButtonRatio.jsx";
import InputField from "./InputField.jsx";

export default function SimulatorForm(props) {


    return (
        <StyledForm>
            <StyledTitle>Simulador</StyledTitle>
            <Row>
                <ButtonRatio
                    name="rendimento"
                    options={['bruto', 'líquido']}
                    info="O rendimento bruto são os ganhos totais da aplicação, enquanto que o rendimento líquido é esse montante menos as taxas e impostos sobre ele."
                ></ButtonRatio>
                <ButtonRatio
                    name="tipo-de-indexação"
                    options={['PRÉ', 'POS', 'FIXADO']}
                    info="Num rendimento prefixado o retorno já é conhecido, no pos depende de uma variavel."
                ></ButtonRatio>
            </Row>
            <Row>
                <InputField label="Aporte Inicial" sufix="R$"></InputField>
                <InputField label="Aporte Mensal" sufix="R$"></InputField>
            </Row>
            <Row>
                <InputField label="Prazo (em meses)"></InputField>
                <InputField label="Rentabilidade"></InputField>
            </Row>
            <Row>
                <InputField label="IPCA (ao ano)"></InputField>
                <InputField label="CDI (ao ano)"></InputField>
            </Row>
            <StyledFooter>
                <ButtonTrans>Limpar campos</ButtonTrans>
                <ButtonSolid>Simular</ButtonSolid>
            </StyledFooter>
        </StyledForm>
    );
}

const StyledForm = styled.form`
box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-areas: 
        "title"
        "abs";
`;


const Row = styled.div`
width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    grid-area: title;
    margin-bottom: 1rem;
`;

const StyledFooter = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`;

const ButtonTrans = styled.button`
    box-sizing: border-box;
    padding: .9rem 0.2rem;
    width: 48%;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;
`;

const ButtonSolid = styled(ButtonTrans)`
    background-color: #ed8e53;
    border: none;
`;