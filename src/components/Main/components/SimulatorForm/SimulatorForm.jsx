import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonRadio from "./ButtonRadio/ButtonRadio.jsx";
import InputField from "./InputField/InputField.jsx";


export default function SimulatorForm(props) {

    // Inicia IPCA e CDI
    const [indicators, setIndicators] = useState([]);
    useEffect(() => {
        if (indicators.length == 0) {
            fetch('http://localhost:3000/indicadores')
                .then(res => res.blob())
                .then(res => res.text())
                .then(rawData => {
                    rawData = JSON.parse(rawData);
                    setIndicators([rawData[1].valor + '%', rawData[0].valor + '%']);
                });
        }
    }, []);

    // submit do form
    const getInvestResult = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/simulacoes')
            .then(res => res.blob())
            .then(res => res.text())
            .then(rawData => props.setInvestmentData(JSON.parse(rawData)));
    };

    return (
        <Container>
            <StyledTitle>Simulador</StyledTitle>
            <StyledForm>
                <Row>
                    <ButtonRadio
                        name="rendimento"
                        options={['bruto', 'líquido']}
                        info="O rendimento bruto são os ganhos totais da aplicação, enquanto que o rendimento líquido é esse montante menos as taxas e impostos sobre ele."
                    ></ButtonRadio>
                    <ButtonRadio
                        name="tipo-de-indexação"
                        options={['PRÉ', 'POS', 'FIXADO']}
                        info="Num rendimento prefixado o retorno já é conhecido, no pos depende de uma variavel."
                    ></ButtonRadio>
                </Row>
                <Row>
                    <InputField label="Aporte Inicial" prefix="R$" type="number" errorMsg="Aporte deve ser um numero"></InputField>
                    <InputField label="Aporte Mensal" prefix="R$" type="number" errorMsg="Aporte deve ser um numero"></InputField>
                </Row>
                <Row>
                    <InputField label="Prazo (em meses)"></InputField>
                    <InputField label="Rentabilidade"></InputField>
                </Row>
                <Row>
                    <InputField label="IPCA (ao ano)" value={indicators[0]}></InputField>
                    <InputField label="CDI (ao ano)" value={indicators[1]}></InputField>
                </Row>
                <StyledFooter>
                    <ButtonTrans type="reset">Limpar campos</ButtonTrans>
                    <ButtonSolid onClick={getInvestResult}>Simular</ButtonSolid>
                </StyledFooter>
            </StyledForm>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-areas: "title" "form";
    grid-template-rows: 2rem 1fr;
`;

const StyledForm = styled.form`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr) 3rem;
    row-gap: 1rem;
    margin-bottom: 20px;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;

    @media(max-width: 420px) {
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr;
    }
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    height: 100%;
`;

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonTrans = styled.button`
    box-sizing: border-box;
    width: 48%;
    height: 3rem;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: #969696;
    }
`;

const ButtonSolid = styled(ButtonTrans)`
    background-color: #ed8e53;
    border: none;
`;